import React from 'react';
import { Article } from '../data/blogData';
import { Calendar, Tag, Clock } from 'lucide-react';

interface ArticleViewProps {
  article: Article | null;
  relatedArticles: Article[];
  onSelectArticle: (articleId: string) => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ 
  article, 
  relatedArticles,
  onSelectArticle
}) => {
  if (!article) {
    return (
      <div className="article-view p-6 border rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-center">
          Selecione um tema ou artigo para ver o seu conteúdo
        </p>
      </div>
    );
  }

  // Estimativa de tempo de leitura (pode ser ajustada ou removida se não for precisa)
  const readingTime = Math.ceil((article.content?.split(' ') || []).length / 200); // Média de 200 palavras por minuto

  return (
    <div className="article-view border rounded-lg bg-white dark:bg-gray-800 shadow-sm overflow-y-auto">
      <h2 className="text-lg font-semibold p-3 border-b dark:border-gray-700 mb-2 dark:text-white">Visualizador de Artigos</h2>
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          {article.url ? (
            <a 
              href={`https://otaviotolentino.wordpress.com/${article.url || ''}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline clickable"
            >
              <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">{article.title}</h1>
            </a>
          ) : (
            <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{article.title}</h1>
          )}
          {article.category && (
            <span className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
              {article.category}
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">Pressione o Título para Ler o artigo completo</p>
        
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
              className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="article-summary mb-6 p-4 bg-gray-50 dark:bg-gray-700 border-l-4 border-blue-500 rounded">
          <h3 className="font-semibold mb-2 dark:text-white">Resumo</h3>
          <p className="dark:text-gray-300">{article.summary}</p>
        </div>
        
        {article.content ? (
          <div className="article-content mb-8">
            <p className="dark:text-gray-300">{article.content}</p>
          </div>
        ) : (
          <div className="article-content mb-8 p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-800 rounded">
            <p className="dark:text-gray-300">Esta é uma visualização resumida. Para ler o artigo completo, visite a postagem original no blog.</p>
          </div>
        )}
        
        {relatedArticles.length > 0 && (
          <div className="related-articles mt-8">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">Artigos Relacionados</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedArticles.map(related => {
                const isClickable = !!related.url;
                const relatedClasses = [
                  'p-4',
                  'border',
                  'rounded',
                  'dark:border-gray-700',
                  'article-list-item' // Add the base class for CSS rule
                ];

                if (isClickable) {
                  relatedClasses.push('hover:bg-gray-50', 'dark:hover:bg-gray-700', 'clickable');
                } else {
                  relatedClasses.push('not-clickable');
                }

                return (
                  <div 
                    key={related.id}
                    className={relatedClasses.join(' ')}
                    onClick={() => isClickable && onSelectArticle(related.id)}
                  >
                    <h4 className="font-medium mb-2 dark:text-white">{related.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{related.summary}</p>
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