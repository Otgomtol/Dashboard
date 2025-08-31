import React from 'react';
import { HelpCircle, Sun, Moon } from 'lucide-react';
import SearchBar from './SearchBar';

/**
 * Props for the AppHeader component.
 */
interface AppHeaderProps {
  /**
   * Whether dark mode is currently enabled.
   */
  isDarkMode: boolean;
  /**
   * Function to toggle the color theme.
   */
  toggleTheme: () => void;
  /**
   * Function to control the visibility of the help dialog.
   */
  setIsHelpDialogOpen: (isOpen: boolean) => void;
  /**
   * Function to set the search results from the SearchBar.
   */
  setSearchResults: (results: any[]) => void;
  /**
   * The current search query string.
   */
  searchQuery: string;
  /**
   * Function to update the search query string.
   */
  setSearchQuery: (query: string) => void;
  /**
   * Function to set the application's search mode.
   */
  setIsSearchMode: (isMode: boolean) => void;
}

/**
 * Renders the main application header.
 * This component includes the main title, welcome messages, search functionality,
 * and controls for theme toggling and help dialog visibility.
 * @param {AppHeaderProps} props The props for the component.
 */
const AppHeader: React.FC<AppHeaderProps> = ({
  isDarkMode,
  toggleTheme,
  setIsHelpDialogOpen,
  setSearchResults,
  searchQuery,
  setSearchQuery,
  setIsSearchMode,
}) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm py-4 relative">
      <div className="container mx-auto px-4 relative">
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
        <div className="mt-4 flex justify-center items-center space-x-2">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-150"
            aria-label="Alternar tema"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button 
            onClick={() => setIsHelpDialogOpen(true)}
            className="p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-150"
            aria-label="Abrir ajuda"
          >
            <HelpCircle className="h-5 w-5" />
          </button>
          <SearchBar 
            onSearchResults={setSearchResults} 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setIsSearchMode={setIsSearchMode} // Pass the setter here
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
