import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';
import ThemeNavigator from './components/ThemeNavigator';
import SearchBar from './components/SearchBar';
import Mindmap from './components/Mindmap';
import ArticleView from './components/ArticleView';
import { 
  themes, 
  articles, 
  connections, 
  findThemeById, 
  getArticlesForTheme,
  getRelatedArticles
} from './data/blogData';
import './App.css';

function App() {
  // Use dark mode hook
  useDarkMode();
  
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [displayedArticles, setDisplayedArticles] = useState<typeof articles>([]);
  const [searchResults, setSearchResults] = useState<typeof articles>([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isSimpleListView, setIsSimpleListView] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState<typeof articles>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle theme selection
  useEffect(() => {
    if (selectedThemeId) {
      const themeArticles = getArticlesForTheme(selectedThemeId);
      setDisplayedArticles(themeArticles);
      setSelectedArticleId(null);
      setIsSearchMode(false);
      setIsSimpleListView(true); // Activate simple list view
      // Clear search query when a theme is selected
      setSearchQuery('');
    }
  }, [selectedThemeId]);

  // Handle article selection
  useEffect(() => {
    if (selectedArticleId) {
      const related = getRelatedArticles(selectedArticleId);
      setRelatedArticles(related);
      setIsSimpleListView(false); // Deactivate simple list view
      // Clear search query when an article is selected
      setSearchQuery('');
    }
  }, [selectedArticleId]);

  // Handle search results
  useEffect(() => {
    if (isSearchMode) {
      if (searchResults.length > 1) {
        // Multiple results: Display only the list of articles
        setDisplayedArticles(searchResults);
        setSelectedArticleId(null); // Ensure no single article is selected
        setSelectedThemeId(null);
      } else if (searchResults.length === 1) {
        // Single result: Automatically select the article
        setSelectedArticleId(searchResults[0].id);
        // Also update displayed articles to show it in context if needed
        // This might be handled by the selectedArticleId effect
      } else {
        // No results
        setDisplayedArticles([]);
        setSelectedArticleId(null);
      }

      // Signal to ThemeNavigator about the search
      window.dispatchEvent(new CustomEvent('search-selection', { 
        detail: { 
          fromSearch: true,
          articles: searchResults
        } 
      }));
    }
  }, [searchResults, isSearchMode]);

  // Custom theme selection handler to clear search
  const handleThemeSelect = (themeId: string) => {
    setSelectedThemeId(themeId);
    setSearchQuery(''); // Clear search query
  };

  // Handle node click in mindmap
  const handleNodeClick = (nodeId: string) => {
    // Clear search query when any node is clicked
    setSearchQuery('');
    
    // Check if it's a theme
    const theme = findThemeById(nodeId);
    if (theme) {
      setSelectedThemeId(nodeId);
      
      // Signal to ThemeNavigator that selection came from mindmap
      // This will be used to trigger accordion behavior
      window.dispatchEvent(new CustomEvent('mindmap-selection', { 
        detail: { 
          themeId: nodeId,
          fromMindmap: true
        } 
      }));
      return;
    }
    
    // Check if it's an article
    const article = articles.find(a => a.id === nodeId);
    if (article) {
      setSelectedArticleId(nodeId);
      
      // Find the theme this article belongs to
      for (const theme of themes) {
        const themeArticles = getArticlesForTheme(theme.id);
        if (themeArticles.some(a => a.id === nodeId)) {
          setSelectedThemeId(theme.id);
          setDisplayedArticles(themeArticles);
          
          // Signal to ThemeNavigator that selection came from mindmap
          // This will be used to trigger accordion behavior
          window.dispatchEvent(new CustomEvent('mindmap-selection', { 
            detail: { 
              themeId: theme.id,
              articleId: nodeId,
              fromMindmap: true
            } 
          }));
          break;
        }
      }
    }
  };

  // Get the selected article
  const selectedArticle = selectedArticleId 
    ? articles.find(a => a.id === selectedArticleId) || null
    : null;

  return (
    <Router>
      <div className={`app min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
        <header className="bg-white dark:bg-gray-800 shadow-sm py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center text-blue-800 dark:text-blue-400">
              ÁGUAS VIVAS QUE CORREM MANSAMENTE
            </h1>
            {/* Updated Header Content */}
            <div className="text-center mt-2">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Bem-vindo ao Painel do Blog
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Pesquise artigos para começar ou selecione um tema no painel &apos;Navegador de Temas&apos; abaixo.
              </p>
            </div>
            <div className="flex justify-center items-center mt-1">
              <a 
                href="https://otaviotolentino.wordpress.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
              >
                Visitar Blog Original
              </a>
            </div>
            <div className="mt-4 flex justify-center">
              <SearchBar 
                onSearchResults={setSearchResults} 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setIsSearchMode={setIsSearchMode} // Pass the setter here
              />
            </div>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            {/* Main Content Panel (Navigator + Articles) */}
            <div className="w-full flex flex-col">
              {/* Theme Navigator is placed here */}
              <ThemeNavigator 
                themes={themes} 
                onSelectTheme={handleThemeSelect}
                selectedThemeId={selectedThemeId}
              />

              {/* Article List & Content follows, in the same container */}
              <div className="mt-6">
                <div><p></p></div>
                {isSearchMode && searchResults.length > 0 && (
                  <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-200">
                      {`Encontrados ${searchResults.length} resultados`}
                    </p>
                  </div>
                )}
                
                {!selectedArticle && displayedArticles.length > 0 && (
                  <div className="border rounded-lg bg-white dark:bg-gray-800 shadow-sm overflow-y-auto">
                    <h2 className="text-lg font-semibold p-3 border-b dark:border-gray-700 mb-2 dark:text-white">Visualizador de Artigos</h2>
                    <div className="article-list overflow-y-auto space-y-1 p-2">
                      {displayedArticles.map(article => {
                        const isClickable = !!article.url;
                        const articleClasses = ['article-list-item'];

                        if (isSearchMode && searchResults.length > 1) {
                          articleClasses.push('flex', 'items-center', 'py-2', 'px-3', 'rounded-md');
                        } else {
                          articleClasses.push('flex', 'items-center', 'py-2', 'px-3', 'rounded-md', 'bg-white', 'dark:bg-gray-800');
                        }

                        if (isClickable) {
                          articleClasses.push('clickable');
                          if (!(isSearchMode && searchResults.length > 1)) {
                            articleClasses.push('hover:bg-gray-50', 'dark:hover:bg-gray-700');
                          }
                        } else {
                          articleClasses.push('not-clickable');
                        }

                        return (
                          <div 
                            key={article.id}
                            className={articleClasses.join(' ')}
                            onClick={() => isClickable && setSelectedArticleId(article.id)}
                          >
                            {isSearchMode && searchResults.length > 1 && <div className="w-4 h-4 mr-2" />}
                            <span className="truncate dark:text-gray-200 flex-grow min-w-0">{article.title}</span>
                            {(isSearchMode && searchResults.length > 1) || isSimpleListView ? null : (
                              <>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                  <span className="mr-3">{article.date}</span>
                                  <span>{article.category}</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">{article.summary.substring(0, 150)}...</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {article.tags.slice(0, 3).map(tag => (
                                    <span 
                                      key={tag} 
                                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                  {article.tags.length > 3 && (
                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                                      {`+${article.tags.length - 3} mais`}
                                    </span>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {selectedArticle && (
                  <ArticleView 
                    article={selectedArticle}
                    relatedArticles={relatedArticles}
                    onSelectArticle={setSelectedArticleId}
                  />
                )}
                
                {!selectedArticle && displayedArticles.length === 0 && !isSearchMode && (
                  <div className="flex flex-col items-center justify-center h-full bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6">
                    <h2 className="text-lg font-semibold mb-4 dark:text-white">Visualizador de Artigos</h2>
                    <div className="text-center">
                      <p className="text-gray-500 dark:text-gray-400">Selecione um tema ou pesquise para ver os artigos.</p>
                    </div>
                  </div>
                )}
                
                {!selectedArticle && displayedArticles.length === 0 && isSearchMode && (
                  <div className="flex items-center justify-center h-full bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6">
                    <div className="text-center">
                      <h2 className="text-xl font-semibold mb-2 dark:text-white">Nenhum Resultado Encontrado</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        Tente termos de pesquisa diferentes ou navegue pelos temas no painel esquerdo.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Panel: Mindmap */}
            <div className="w-full mt-6">
              <Mindmap 
                connections={connections}
                themes={themes}
                articles={articles}
                selectedId={selectedArticleId || selectedThemeId}
                onNodeClick={handleNodeClick}
              />
            </div>
          </div>
        </main>
        
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center">
              {/* Footer content removed as requested */}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
