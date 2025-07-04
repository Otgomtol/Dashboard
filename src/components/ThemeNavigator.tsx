import React, { useState, useEffect, useCallback } from 'react';
import { Theme, findThemeById } from '../data/blogData'; // Import findThemeById
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ThemeNavigatorProps {
  themes: Theme[];
  onSelectTheme: (themeId: string) => void;
  selectedThemeId: string | null;
}

// Helper function to get siblings of a theme
const getSiblings = (themeId: string, parentId: string | undefined, allThemes: Theme[]): Theme[] => {
  if (parentId) {
    const parent = findThemeById(parentId); // Assuming findThemeById can access the flattened map or traverse
    return parent ? parent.children : [];
  } else {
    // It's a top-level theme
    return allThemes;
  }
};

const ThemeNavigator: React.FC<ThemeNavigatorProps> = ({ 
  themes, 
  onSelectTheme,
  selectedThemeId
}) => {
  const [expandedThemes, setExpandedThemes] = useState<Record<string, boolean>>({});
  
  // Function to find all parent IDs of a theme
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
  
  // Function to apply accordion behavior - expand target and collapse siblings
  const applyAccordionBehavior = useCallback((targetId: string, fromSearchOrMindmap: boolean = false) => {
    const parentsToExpand = findParentIds(themes, targetId);
    
    setExpandedThemes(currentState => {
      const nextState: Record<string, boolean> = {}; // Start with a clean slate

      // Expand the target theme and all its parents
      nextState[targetId] = true;
      parentsToExpand.forEach(id => {
        nextState[id] = true;
      });
      
      return nextState;
    });
  }, [themes, findParentIds]);
  
  // Listen for mindmap selection events
  useEffect(() => {
    const handleMindmapSelection = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { themeId, fromMindmap } = customEvent.detail;
      
      if (themeId && fromMindmap) {
        applyAccordionBehavior(themeId, true);
      }
    };
    
    window.addEventListener('mindmap-selection', handleMindmapSelection);
    
    return () => {
      window.removeEventListener('mindmap-selection', handleMindmapSelection);
    };
  }, [applyAccordionBehavior]);
  
  // Listen for search selection events
  useEffect(() => {
    // Helper function to find the theme ID containing an article
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

    // Helper function to get all ancestors of a theme
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
            .map((article: any) => findThemeContainingArticle(themes, article.id))
            .filter((t: string | null): t is string => t !== null);

          if (articleThemes.length === 0) {
            setExpandedThemes({});
            return;
          }

          // If only one article resulted in the search, expand its theme
          if (articles.length === 1 && articleThemes.length === 1) {
            applyAccordionBehavior(articleThemes[0], true);
            return;
          }

          // For multiple articles, find the lowest common ancestor
          const ancestries = articleThemes.map(themeId => getAncestry(themeId));
          let lowestCommonAncestor: string | null = null;
          
          if (ancestries.length > 0) {
            const firstAncestry = ancestries[0];
            for (let i = 0; i < firstAncestry.length; i++) {
              const ancestor = firstAncestry[i];
              const isCommon = ancestries.slice(1).every(path => path.length > i && path[i] === ancestor);
              if (isCommon) {
                lowestCommonAncestor = ancestor;
              } else {
                break;
              }
            }
          }

          if (lowestCommonAncestor) {
            applyAccordionBehavior(lowestCommonAncestor, true);
          } else {
            // If no common ancestor (e.g., from different top-level themes), collapse all
            setExpandedThemes({});
          }
        } else {
          // No results, collapse all
          setExpandedThemes({});
        }
      }
    };
    
    window.addEventListener('search-selection', handleSearchSelection);
    
    return () => {
      window.removeEventListener('search-selection', handleSearchSelection);
    };
  }, [themes, applyAccordionBehavior]);
  
  // Auto-expand parent themes when a child is selected directly in the navigator
  useEffect(() => {
    if (selectedThemeId) {
      const parentsToExpand = findParentIds(themes, selectedThemeId);
      if (parentsToExpand.length > 0) {
        // Keep existing expanded state, only add parents
        setExpandedThemes(prev => {
            const newState = { ...prev };
            parentsToExpand.forEach(id => {
                // Avoid overriding if a sibling was just collapsed by accordion logic
                // Check if the parent is already being expanded
                if (!newState[id]) {
                   newState[id] = true; 
                }
            });
            return newState;
        });
      }
    }
  }, [selectedThemeId, themes, findParentIds]);
  
  // Modified toggleExpand to implement exclusive accordion logic
  const toggleExpand = useCallback((themeId: string, parentId?: string) => {
    setExpandedThemes(prev => {
      const isCurrentlyExpanded = !!prev[themeId];
      const nextState = { ...prev }; // Clone previous state

      // Find siblings using the provided themes array (top-level)
      const siblings = getSiblings(themeId, parentId, themes);

      if (!isCurrentlyExpanded) { // If expanding this node
        // Collapse all siblings first
        siblings.forEach(sibling => {
          if (sibling.id !== themeId) {
            nextState[sibling.id] = false;
          }
        });
        // Expand the clicked node
        nextState[themeId] = true;
      } else { // If collapsing this node
        nextState[themeId] = false;
        // When collapsing, we don't need to affect siblings
      }
      
      // Ensure parents remain expanded if a child is expanded
      // (This might be redundant due to the useEffect, but good for safety)
      if (parentId && nextState[themeId]) {
          let currentParentId: string | undefined = parentId;
          while(currentParentId) {
              const parent = findThemeById(currentParentId);
              if (parent) {
                  nextState[currentParentId] = true;
                  currentParentId = parent.parentId;
              } else {
                  currentParentId = undefined;
              }
          }
      }

      return nextState;
    });
  }, [themes]); // Add themes to dependency array for getSiblings
  
  const renderTheme = (theme: Theme, level: number = 0) => {
    const isExpanded = expandedThemes[theme.id] || false;
    const isSelected = theme.id === selectedThemeId;
    const hasChildren = theme.children.length > 0;
    
    return (
      <div key={theme.id} className="theme-item">
        <div 
          className={`
            flex items-center py-2 px-3 rounded-md cursor-pointer
            ${isSelected ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
          `}
          style={{ paddingLeft: `${level * 16 + 12}px` }}
          onClick={() => onSelectTheme(theme.id)} // Click row selects theme
        >
          {hasChildren && (
            <button 
              className="mr-2 focus:outline-none flex-shrink-0" // Added flex-shrink-0
              onClick={(e) => {
                e.stopPropagation(); // Prevent row click (selectTheme)
                toggleExpand(theme.id, theme.parentId); // Pass parentId
              }}
              aria-expanded={isExpanded}
              aria-label={`Expandir ${theme.name}`}
            >
              {isExpanded ? (
                <ChevronDown size={16} className="dark:text-gray-300" />
              ) : (
                <ChevronRight size={16} className="dark:text-gray-300" />
              )}
            </button>
          )}
          {/* Add placeholder for alignment if no children */}
          {!hasChildren && <div className="w-4 h-4 mr-2" />}
          <span className="truncate dark:text-gray-200 flex-grow min-w-0">{theme.name}</span> {/* Added flex-grow and min-w-0 */} 
        </div>
        
        {/* Render children only if expanded */}
        {isExpanded && hasChildren && (
          <div className="theme-children pl-4 border-l border-gray-200 dark:border-gray-700 ml-5"> {/* Added padding/border for visual hierarchy */}
            {theme.children.map(child => renderTheme(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    // Removed fixed height and overflow from here in previous step
    <div className="theme-navigator border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm p-2">
      <h2 className="text-lg font-semibold p-3 border-b dark:border-gray-700 mb-2 dark:text-white">Navegador de Temas</h2>
      <div className="theme-list">
        {/* Pass top-level themes to renderTheme */}
        {themes.map(theme => renderTheme(theme, 0))}
      </div>
    </div>
  );
};

export default ThemeNavigator;

