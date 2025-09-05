import React from 'react';
import { Article } from '../data/blogData';
import { Calendar, Tag, Clock, HelpCircle, Eye } from 'lucide-react';

/**
 * Props for the ArticleView component.
 */
interface ArticleViewProps {
  /** The article object to display. */
  article: Article | null;
  /** An array of related articles to display. */
  relatedArticles: Article[];
  /** Callback function when a related article is selected. */
  onSelectArticle: (articleId: string) => void;
  /** Function to set the content of the help dialog. */
  setHelpContent: (content: { title: string; content: React.ReactNode } | null) => void;
}

/**
 * A component that displays the full content of a selected article,
 * including metadata and a list of related articles.
 */
const ArticleView: React.FC<ArticleViewProps> = ({ 
  article, 
  relatedArticles,
  onSelectArticle,
  setHelpContent
}) => {
  if (!article) {
    // This case should ideally not be reached if the parent component handles it,
    // but it serves as a fallback.
    return null;
  }

  

  const showHelp = () => {
    setHelpContent({
      title: 'Ajuda - Visualização',
      content: (
        <div className="grid gap-4 py-4 text-sm">
          <div className="flex items-start gap-4">
            <Eye className="h-6 w-6 mt-1 text-purple-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Visualizador de Artigos</h3>
              <p className="text-muted-foreground">
                Esta área, localizada na coluna da direita, é onde o conteúdo dos artigos é exibido.
              </p>
            </div>
          </div>
          <div className="pl-10">
            <h4 className="font-semibold mb-2">Funcionalidades:</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <strong>Exibição de Conteúdo:</strong> Quando um artigo é selecionado, seu título, data, tags, resumo e conteúdo principal aparecem aqui.
              </li>
              <li>
                <strong>Link para o Artigo Original:</strong> O título do artigo é um link clicável que abre o post completo em uma nova aba.
              </li>
              <li>
                <strong>Artigos Relacionados:</strong> Ao final do conteúdo, uma lista de artigos relacionados é exibida.
              </li>
              <li>
                <strong>Lista de Artigos:</strong> Se você selecionar um tema com múltiplos artigos, esta área mostrará a lista para você escolher um.
              </li>
            </ul>
          </div>
        </div>
      )
    });
  };

  // Estimativa de tempo de leitura (pode ser ajustada ou removida se não for precisa)
  const readingTime = Math.ceil((article.content?.split(' ') || []).length / 200); // Média de 200 palavras por minuto

  return (
    <div className="article-view border rounded-lg bg-white dark:bg-gray-800 shadow-sm overflow-y-auto">
      <div className="flex items-center gap-2 p-3 border-b dark:border-gray-700 mb-2">
        <h2 className="text-lg font-semibold dark:text-white">Visualizador de Artigos</h2>
        <button 
          onClick={showHelp}
          className="p-1 text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors duration-150"
          aria-label="Ajuda sobre a visualização de artigos"
        >
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>
      <div className="article-list overflow-y-auto p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          {article.url ? (
            <a 
              href={`https://otaviotolentino.wordpress.com/${article.url || ''}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline clickable"
              onClick={() => {
                if (article.isNew) {
                  localStorage.setItem('lastReadNewUrl', article.url);
                }
              }}
            >
              <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">{article.title}</h1>
            </a>
          ) : (
            <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{article.title}</h1>
          )}
          {article.category && (
            <span className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
            </span>
          )}
        </div>
                
        <div className="flex flex-wrap gap-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{`${readingTime} min de leitura`}</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-1" />
            <span>{article.category}</span>
          </div>
        </div>
        
        <div className="article-tags mb-6 flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-gray-600 dark:text-gray-400 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="article-summary mb-6">
          <h3 className="font-semibold mb-2 dark:text-white">Resumo</h3>
          <p className="dark:text-gray-300">{article.summary}</p>
        </div>
        
        {article.content ? (
          <div className="article-content mb-8">
            <p className="dark:text-gray-300">{article.content}</p>
          </div>
        ) : (
          <div className="article-content mb-8">
            <p className="dark:text-gray-300">Obs.: Esta é uma visualização resumida. Clique no Título azul para Ler o artigo completo no Blog.</p>
          </div>
        )}
        
        {relatedArticles.length > 0 && (
          <div className="related-articles mt-8">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">Artigos Relacionados</h3>
            <div>
              {relatedArticles.map(related => {
                const isClickable = !!related.url;
                const relatedClasses = [
                  'flex',
                  'items-center',
                  'py-2',
                  'px-3',
                  'rounded-md',
                  'bg-white',
                  'dark:bg-gray-800'
                ];

                if (isClickable) {
                  relatedClasses.push('hover:bg-gray-100', 'dark:hover:bg-gray-700', 'clickable');
                } else {
                  relatedClasses.push('not-clickable');
                }

                return (
                  <div 
                    key={related.id}
                    className={relatedClasses.join(' ')}
                    onClick={() => isClickable && onSelectArticle(related.id)}
                  >
                    <h4 className="font-medium dark:text-white">{related.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleView;