import React, { useState, useEffect, useCallback } from 'react';
import { Theme, findThemeById, Article, articles as allArticles } from '../data/blogData';
import { ChevronDown, ChevronRight, HelpCircle, ListTree } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

/**
 * Props for the ThemeNavigator component.
 */
interface ThemeNavigatorProps {
  /**
   * An array of theme objects to be displayed.
   */
  themes: Theme[];
  /**
   * Callback function invoked when a theme is selected.
   */
  onSelectTheme: (themeId: string) => void;
  /**
   * The ID of the currently selected theme, or null if none is selected.
   */
  selectedThemeId: string | null;
  /**
   * Function to set the content of the help dialog.
   * Passing null closes the dialog.
   */
  setHelpContent: (content: { title: string; content: React.ReactNode } | null) => void;
}

// Helper function to get siblings of a theme
const getSiblings = (themeId: string, parentId: string | undefined, allThemes: Theme[]): Theme[] => {
  if (parentId) {
    const parent = findThemeById(parentId);
    return parent ? parent.children : [];
  } else {
    return allThemes;
  }
};

// Helper function to get all descendant IDs of a theme
const getAllDescendantIds = (themeId: string): string[] => {
  const theme = findThemeById(themeId);
  if (!theme) return [];

  const ids: string[] = [];
  const queue: Theme[] = [...theme.children];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      ids.push(current.id);
      if (current.children) {
        queue.push(...current.children);
      }
    }
  }
  return ids;
};

// Helper function to check if a theme or its descendants lead to a complete article
const isPathToCompleteArticle = (theme: Theme): boolean => {
  // Check direct articles
  const hasCompleteDirectArticle = theme.articles.some(articleId => {
    const article = allArticles.find(a => a.id === articleId);
    return article && article.url;
  });

  if (hasCompleteDirectArticle) {
    return true;
  }

  // Check children recursively
  if (theme.children.length > 0) {
    return theme.children.some(child => isPathToCompleteArticle(child));
  }

  return false;
};

const ThemeNavigator: React.FC<ThemeNavigatorProps> = ({ 
  themes, 
  onSelectTheme,
  selectedThemeId,
  setHelpContent
}) => {
  const [expandedThemes, setExpandedThemes] = useState<Record<string, boolean>>({});
  const isMobile = useIsMobile();
  
  const findParentIds = useCallback((currentThemes: Theme[], targetId: string, parentIds: string[] = []): string[] => {
    for (const theme of currentThemes) {
      if (theme.id === targetId) {
        return parentIds;
      }
      const foundInChildren = findParentIds(theme.children, targetId, [...parentIds, theme.id]);
      if (foundInChildren.length > 0) {
        return foundInChildren;
      }
    }
    return [];
  }, []);
  
  const applyAccordionBehavior = useCallback((targetId: string) => {
    const parentsToExpand = findParentIds(themes, targetId);
    
    setExpandedThemes(() => {
      const nextState: Record<string, boolean> = {};

      nextState[targetId] = true;
      parentsToExpand.forEach(id => {
        nextState[id] = true;
      });
      
      return nextState;
    });
  }, [themes, findParentIds]);

  const showHelp = () => {
    setHelpContent({
      title: 'Ajuda - Navegação',
      content: (
        <div className="grid gap-4 py-4 text-sm">
          <div className="flex items-start gap-4">
            <ListTree className="h-6 w-6 mt-1 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Navegador de Temas</h3>
              <p className="text-muted-foreground">
                O painel "Navegador de Temas" permite que você explore a estrutura de conteúdo do blog de forma hierárquica.
              </p>
            </div>
          </div>
          <div className="pl-10">
            <h4 className="font-semibold mb-2">Como Usar:</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <strong>Estrutura em Árvore:</strong> Os temas são organizados como uma árvore. Temas com uma seta ao lado (▶) contêm sub-temas.
              </li>
              <li>
                <strong>Expandir e Recolher:</strong> Clique em um tema com uma seta para expandir e ver os sub-temas. Clique novamente para recolher.
              </li>
              <li>
                <strong>Visualizar Artigos de um Tema:</strong> Clique no nome de um tema para carregar todos os artigos associados a ele.
                <ul className="list-circle pl-5 mt-2 space-y-1">
                  <li>Se o tema tiver <strong>um único artigo</strong>, ele será exibido diretamente.</li>
                  <li>Se tiver <strong>vários artigos</strong>, uma lista aparecerá para seleção.</li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="mt-2 text-xs text-muted-foreground italic">
            <strong>Dica:</strong> A seleção de um tema no Navegador limpa qualquer busca ativa. O mapa de conexões também se ajustará para destacar o tema selecionado.
          </p>
        </div>
      )
    });
  };
  
  useEffect(() => {
    const handleMindmapSelection = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { themeId, fromMindmap } = customEvent.detail;
      
      if (themeId && fromMindmap) {
        applyAccordionBehavior(themeId);
      }
    };
    
    window.addEventListener('mindmap-selection', handleMindmapSelection);
    
    return () => {
      window.removeEventListener('mindmap-selection', handleMindmapSelection);
    };
  }, [applyAccordionBehavior]);
  
  useEffect(() => {
    const findThemeContainingArticle = (currentThemes: Theme[], articleId: string): string | null => {
      for (const theme of currentThemes) {
        if (theme.articles.includes(articleId)) {
          return theme.id;
        }
        const foundInChildren = findThemeContainingArticle(theme.children, articleId);
        if (foundInChildren) {
          return foundInChildren;
        }
      }
      return null;
    };

    const getAncestry = (themeId: string): string[] => {
      const path: string[] = [];
      let currentId: string | undefined = themeId;
      while(currentId) {
          const theme = findThemeById(currentId);
          if (theme) {
              path.unshift(theme.id);
              currentId = theme.parentId;
          } else {
              currentId = undefined;
          }
      }
      return path;
    };

    const handleSearchSelection = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { fromSearch, articles } = customEvent.detail;
      
      if (fromSearch) {
        if (articles && articles.length > 0) {
          const articleThemes = articles
            .map((article: Article) => findThemeContainingArticle(themes, article.id))
            .filter((t: string | null): t is string => t !== null);

          if (articleThemes.length === 0) {
            setExpandedThemes({});
            return;
          }

          if (articles.length === 1 && articleThemes.length === 1) {
            applyAccordionBehavior(articleThemes[0]);
            return;
          }

          const ancestries = articleThemes.map((themeId: string) => getAncestry(themeId));
          let lowestCommonAncestor: string | null = null;
          
          if (ancestries.length > 0) {
            const firstAncestry = ancestries[0];
            for (let i = 0; i < firstAncestry.length; i++) {
              const ancestor = firstAncestry[i];
              const isCommon = ancestries.slice(1).every((path: string[]) => path.length > i && path[i] === ancestor);
              if (isCommon) {
                lowestCommonAncestor = ancestor;
              } else {
                break;
              }
            }
          }

          if (lowestCommonAncestor) {
            applyAccordionBehavior(lowestCommonAncestor);
          } else {
            setExpandedThemes({});
          }
        } else {
          setExpandedThemes({});
        }
      }
    };
    
    window.addEventListener('search-selection', handleSearchSelection);
    
    return () => {
      window.removeEventListener('search-selection', handleSearchSelection);
    };
  }, [themes, applyAccordionBehavior]);
  
  useEffect(() => {
    if (selectedThemeId) {
      const parentsToExpand = findParentIds(themes, selectedThemeId);
      if (parentsToExpand.length > 0) {
        setExpandedThemes(prev => {
            const newState = { ...prev };
            parentsToExpand.forEach(id => {
                if (!newState[id]) {
                   newState[id] = true; 
                }
            });
            return newState;
        });
      }
    }
  }, [selectedThemeId, themes, findParentIds]);
  
  const toggleExpand = useCallback((themeId: string, parentId?: string) => {
    setExpandedThemes(prev => {
      const isCurrentlyExpanded = !!prev[themeId];
      const nextState = { ...prev };

      const siblings = getSiblings(themeId, parentId, themes);

      if (!isCurrentlyExpanded) {
        siblings.forEach(sibling => {
          if (sibling.id !== themeId) {
            nextState[sibling.id] = false;
            const descendantIds = getAllDescendantIds(sibling.id);
            descendantIds.forEach(descId => {
              nextState[descId] = false;
            });
          }
        });
        nextState[themeId] = true;
      } else {
        nextState[themeId] = false;
        const descendantIds = getAllDescendantIds(themeId);
        descendantIds.forEach(id => {
          nextState[id] = false;
        });
      }

      return nextState;
    });
  }, [themes]);
  
  const renderTheme = (theme: Theme, level: number = 0) => {
    const isExpanded = expandedThemes[theme.id] || false;
    const isSelected = theme.id === selectedThemeId;
    const hasChildren = theme.children.length > 0;
    const isClickable = isPathToCompleteArticle(theme);

    const themeClasses = [
      'flex',
      'items-center',
      'py-2',
      'px-3',
      'rounded-md',
      'theme-item',
      'text-gray-800',
      'dark:text-gray-200'
    ];

    if (isSelected) {
      themeClasses.push('bg-blue-100', 'dark:bg-blue-900');
    } else {
      themeClasses.push('hover:bg-gray-100', 'dark:hover:bg-gray-700');
    }

    if (isClickable) {
      themeClasses.push('clickable');
    } else {
      themeClasses.push('not-clickable');
    }

    const buttonClasses = ['mr-2', 'focus:outline-none', 'flex-shrink-0'];
    if (isClickable) {
      buttonClasses.push('clickable');
    } else {
      buttonClasses.push('not-clickable');
    }

    // --- NEW CONDITIONAL LOGIC FOR CHILDREN WRAPPER ---
    const childrenContainerClasses = isMobile 
      ? "theme-children pl-3 border-l border-gray-200 dark:border-gray-700"
      : "theme-children pl-4 border-l border-gray-200 dark:border-gray-700 ml-5";

    return (
      <div key={theme.id} className="theme-item">
        <div 
          className={themeClasses.join(' ')}
          // The original desktop indentation logic is preserved via inline style
          style={!isMobile ? { paddingLeft: `${level * 12}px` } : {}}
          onClick={() => {
            if (isClickable) {
              onSelectTheme(theme.id);
              if (hasChildren) {
                toggleExpand(theme.id, theme.parentId);
              }
            }
          }}
        >
          {hasChildren && (
            <button 
              className={buttonClasses.join(' ')}
              onClick={(e) => {
                if (isClickable) {
                  e.stopPropagation();
                  toggleExpand(theme.id, theme.parentId);
                }
              }}
              aria-expanded={isExpanded}
              aria-label={`Expandir ${theme.name}`}
              disabled={!isClickable}
            >
              {isExpanded ? (
                <ChevronDown size={16} className="text-black dark:text-white" />
              ) : (
                <ChevronRight size={16} className="text-black dark:text-white" />
              )}
            </button>
          )}
          {!hasChildren && <div className="w-4 h-4 mr-2" />}
          <span className="truncate flex-grow min-w-0">{theme.name}</span>
        </div>
        
        {isExpanded && hasChildren && (
          <div className={childrenContainerClasses}>
            {theme.children.map(child => renderTheme(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="theme-navigator border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm overflow-y-auto">
      <div className="p-3 border-b dark:border-gray-700 mb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold dark:text-white">Navegador de Temas</h2>
          <button 
            onClick={showHelp}
            className="p-1 text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors duration-150"
            aria-label="Ajuda sobre a navegação de temas"
          >
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="theme-list overflow-y-auto space-y-1 p-2">
        {themes.map(theme => renderTheme(theme, 0))}
      </div>
    </div>
  );
};

export default ThemeNavigator;
