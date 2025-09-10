const { Project } = require('ts-morph');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// --- CONFIGURAÇÃO ---
const BLOG_URL = 'http://otaviotolentino.wordpress.com';
const BLOG_DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'blogData.ts');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'data');

/**
 * Extrai a data no formato AAAA-MM-DD de uma URL do WordPress.
 * @param {string} url - A URL do post.
 * @returns {string|null} A data formatada ou null.
 */
function extractDateFromUrl(url) {
  const match = url.match(/(\d{4})\/(\d{2})\/(\d{2})/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return null;
}

/**
 * Encontra a data mais recente entre todos os artigos no arquivo blogData.ts.
 * @param {import('ts-morph').SourceFile} sourceFile - O arquivo fonte do ts-morph.
 * @returns {Date | null} O objeto Date mais recente ou null.
 */
function getLatestDateFromBlogData(sourceFile) {
  let latestDate = null;
  try {
    const articlesDeclaration = sourceFile.getVariableDeclaration('articles');
    if (!articlesDeclaration) {
      console.error("Variável 'articles' não encontrada no arquivo.");
      return null;
    }

    const articlesInitializer = articlesDeclaration.getInitializer();
    if (articlesInitializer && articlesInitializer.getKindName() === 'ArrayLiteralExpression') {
        const articlesArray = articlesInitializer.getElements();
        for (const articleObj of articlesArray) {
            if (articleObj.getKindName() === 'ObjectLiteralExpression') {
                const dateProperty = articleObj.getProperty('date');
                if (dateProperty) {
                    const dateValue = dateProperty.getInitializer().getLiteralValue();
                    const articleDate = new Date(dateValue);
                    if (!latestDate || articleDate > latestDate) {
                        latestDate = articleDate;
                    }
                }
            }
        }
    }
  } catch (error) {
    console.error('Erro ao analisar o array de artigos para encontrar a data mais recente.', error);
    return null;
  }
  return latestDate;
}

/**
 * Verifica se uma URL já existe no arquivo blogData.ts.
 * @param {import('ts-morph').SourceFile} sourceFile - O arquivo fonte do ts-morph.
 * @param {string} url - A URL a ser verificada.
 * @returns {boolean} True se a URL existir, false caso contrário.
 */
function urlExistsInBlogData(sourceFile, url) {
    try {
        const articlesDeclaration = sourceFile.getVariableDeclaration('articles');
        if (!articlesDeclaration) return false;

        const articlesInitializer = articlesDeclaration.getInitializer();
        if (articlesInitializer && articlesInitializer.getKindName() === 'ArrayLiteralExpression') {
            const articlesArray = articlesInitializer.getElements();
            for (const articleObj of articlesArray) {
                if (articleObj.getKindName() === 'ObjectLiteralExpression') {
                    const urlProperty = articleObj.getProperty('url');
                    if (urlProperty && urlProperty.getInitializer().getLiteralValue() === url) {
                        return true; // Encontrou a URL
                    }
                }
            }
        }
    } catch (error) {
        console.error('Erro ao verificar a existência da URL.', error);
        return true; // Assumir que existe em caso de erro para evitar duplicatas.
    }
    return false; // Não encontrou a URL
}


/**
 * Busca no blog por um novo artigo.
 * @param {Date} latestDateInFile - A data mais recente do arquivo.
 * @returns {Promise<object|null>} O objeto com a URL e o título do novo post, ou null.
 */
async function findNewArticleOnBlog(latestDateInFile) {
  try {
    console.log('Buscando no blog por novos artigos...');
    const { data } = await axios.get(BLOG_URL);
    const $ = cheerio.load(data);

    const latestPost = $('article').first();
    if (latestPost.length === 0) {
      console.log('Nenhum artigo encontrado na página principal do blog.');
      return null;
    }

    const postUrl = latestPost.find('.entry-title a').attr('href');
    const postTitle = latestPost.find('.entry-title a').text();
    const postDateStr = extractDateFromUrl(postUrl);

    if (!postDateStr || !postUrl) {
        console.log('Não foi possível extrair a data ou a URL do post mais recente.');
        return null;
    }

    const postDate = new Date(postDateStr);

    if (postDate > latestDateInFile) {
      console.log(`Novo artigo encontrado: "${postTitle}"`);
      return { url: postUrl, title: postTitle };
    } else {
      console.log('Nenhum artigo novo encontrado no blog (baseado na data).');
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar artigos no blog:', error);
    return null;
  }
}

/**
 * Extrai os detalhes de um artigo específico do blog.
 * @param {string} url - A URL do artigo.
 * @returns {Promise<object|null>} Os detalhes do artigo ou null.
 */
async function getArticleDetails(url) {
    try {
        console.log(`Extraindo detalhes de: ${url}`);
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const title = $('.entry-title').text().trim();
        const summary = $('.entry-content p').first().text().trim().substring(0, 180);
        const date = extractDateFromUrl(url);
        
        // Tentativa mais genérica para encontrar categoria e tags dentro do post
        const category = $('a[rel="category tag"]').first().text().trim();
        const tags = $('a[rel="tag"]').map((i, el) => $(el).text().trim()).get();

        return { title, date, summary, url, tags, category };
    } catch (error) {
        console.error(`Erro ao extrair detalhes do artigo da URL: ${url}`, error);
        return null;
    }
}

/**
 * Encontra um tema recursivamente na árvore de temas pelo seu ID.
 * @param {import('ts-morph').Node[]} themes - O array de nós de tema para pesquisar.
 * @param {string} id - O ID do tema a ser encontrado.
 * @returns {import('ts-morph').Node | null} O nó do tema encontrado ou null.
 */
function addDataToSourceFile(sourceFile, articleData) {
    // ID consistente para o tema e o artigo
    const themeId = articleData.title.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, '-').toLowerCase().substring(0, 20);
    const themeDescription = articleData.summary.substring(0, 100);
    const themeName = articleData.title.substring(0, 20);

    // 1. Adicionar o novo tema (Lógica corrigida usando parentId)
    const themesDeclaration = sourceFile.getVariableDeclaration('themes');
    const themesInitializer = themesDeclaration.getInitializer();

    if (themesInitializer && themesInitializer.getKindName() === 'ArrayLiteralExpression') {
        themesInitializer.addElement(`{
            id: '${themeId}',
            name: '${themeName}',
            level: 4,
            parentId: 'discipleship',
            description: '${themeDescription}',
            children: [],
            articles: ['${themeId}']
        }`);
        console.log(`Tema '${themeName}' adicionado com parentId: 'discipleship'.`);
    } else {
        console.error("Array 'themes' não foi encontrado ou não é um array literal.");
    }

    // 2. Adicionar o novo artigo
    const articlesDeclaration = sourceFile.getVariableDeclaration('articles');
    const articlesInitializer = articlesDeclaration.getInitializer();
    if (articlesInitializer && articlesInitializer.getKindName() === 'ArrayLiteralExpression') {
        articlesInitializer.addElement(`{
            id: '${themeId}',
            title: '${articleData.title}',
            date: '${articleData.date}',
            summary: '${articleData.summary}',
            url: '${articleData.url}',
            tags: ${JSON.stringify(articleData.tags)},
            category: '${articleData.category}',
			isNew: true,
        }`);
        console.log(`Artigo '${articleData.title}' adicionado com id: '${themeId}'.`);
    }
}


/**
 * Função principal que orquestra a atualização.
 */
async function main() {
  console.log('Iniciando script de atualização do blogData.ts...');

  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(BLOG_DATA_PATH);

  // 1. Obter a data mais recente do arquivo
  const latestDateInFile = getLatestDateFromBlogData(sourceFile);
  if (!latestDateInFile) {
    console.log('Não foi possível determinar a data mais recente do arquivo. Encerrando.');
    return;
  }
  console.log(`Data mais recente no arquivo: ${latestDateInFile.toISOString().split('T')[0]}`);

  // 2. Buscar por um artigo mais novo no blog
  const newArticleInfo = await findNewArticleOnBlog(latestDateInFile);
  if (!newArticleInfo) {
    console.log('Nenhum artigo novo para processar. Encerrando.');
    return;
  }

  // 3. Verificar se a URL do novo artigo já existe no arquivo
  if (urlExistsInBlogData(sourceFile, newArticleInfo.url)) {
      console.log('A URL do novo artigo já consta no Dashboard. Nenhuma ação necessária.');
      return;
  }

  // 4. Extrair todos os detalhes do novo artigo
  const articleDetails = await getArticleDetails(newArticleInfo.url);
  if (!articleDetails) {
      console.log('Falha ao obter detalhes do novo artigo. Encerrando.');
      return;
  }

  // 5. Adicionar os dados ao arquivo fonte (em memória)
  addDataToSourceFile(sourceFile, articleDetails);

  // 6. Salvar o arquivo modificado com um timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const newFileName = `blogData-${timestamp}.ts`;
  const newFilePath = path.join(OUTPUT_DIR, newFileName);

  fs.writeFileSync(newFilePath, sourceFile.getFullText());

  console.log(`\nArquivo atualizado salvo com sucesso em: ${newFilePath}`);
  console.log('Por favor, revise o novo arquivo e substitua o antigo manualmente se estiver tudo correto.');
}

main().catch(error => {
  console.error('Ocorreu um erro inesperado durante a execução do script:', error);
});
