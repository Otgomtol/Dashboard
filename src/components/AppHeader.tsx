import React from 'react';
import { HelpCircle, Sun, Moon, Search, GitBranch, Eye, ListTree, SunMoon, Bell } from 'lucide-react';
import SearchBar from './SearchBar';

/**
 * Props for the AppHeader component.
 */
interface AppHeaderProps {
  /**
   * Whether a new article notification is active.
   */
  hasNotification?: boolean;
  /**
   * Function to handle notification click.
   */
  onNotificationClick?: () => void;
  /**
   * Whether dark mode is currently enabled.
   */
  isDarkMode: boolean;
  /**
   * Function to toggle the color theme.
   */
  toggleTheme: () => void;
  /**
   * Function to set the content of the help dialog.
   * Passing null closes the dialog.
   */
  setHelpContent: (content: { title: string; content: React.ReactNode } | null) => void;
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
  hasNotification,
  onNotificationClick,
  isDarkMode,
  toggleTheme,
  setHelpContent,
  setSearchResults,
  searchQuery,
  setSearchQuery,
  setIsSearchMode,
}) => {

  const showMainHelp = () => {
    setHelpContent({
      title: 'Ajuda / Sobre o Dashboard',
      content: (
        <div className="grid gap-4 py-4">
          <div className="flex items-start gap-4">
            <Search className="h-6 w-6 mt-1 text-green-500" />
            <div>
              <h3 className="font-semibold">Barra de Busca</h3>
              <p className="text-sm text-muted-foreground">
                Digite palavras-chave para filtrar os artigos e os temas nas Conexões de Temas em tempo real.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ListTree className="h-6 w-6 mt-1 text-orange-500" />
            <div>
              <h3 className="font-semibold">Navegador de Temas</h3>
              <p className="text-sm text-muted-foreground">
                Explore os artigos organizados por categorias. Clique em um tema para ver a lista de artigos ou expandir seus sub-temas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Eye className="h-6 w-6 mt-1 text-purple-500" />
            <div>
              <h3 className="font-semibold">Visualizador de Artigos</h3>
              <p className="text-sm text-muted-foreground">
                Quando um artigo é selecionado, seu conteúdo, resumo e informações relacionadas aparecem aqui. Clique no título para abri-lo no blog original.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <GitBranch className="h-6 w-6 mt-1 text-blue-500" />
            <div>
              <h3 className="font-semibold">Conexões de Temas</h3>
              <p className="text-sm text-muted-foreground">
                Navegue pelos temas e artigos de forma visual. Clique em um nó (círculo) para expandir ou recolher temas e para selecionar um artigo.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <SunMoon className="h-6 w-6 mt-1 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Alternador de Tema</h3>
              <p className="text-sm text-muted-foreground">
                O tema visual (claro/escuro) se ajusta automaticamente à configuração do seu sistema operacional.
              </p>
            </div>
          </div>
        </div>
      )
    });
  };

  const showSearchHelp = () => {
    setHelpContent({
      title: 'Ajuda - Busca',
      content: (
        <div className="grid gap-4 py-4 text-sm">
          <div className="flex items-start gap-4">
            <Search className="h-6 w-6 mt-1 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Barra de Busca</h3>
              <p className="text-muted-foreground">
                A barra de busca é a maneira mais rápida de encontrar conteúdo específico.
              </p>
            </div>
          </div>
          <div className="pl-10">
            <h4 className="font-semibold mb-2">Como Usar:</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <strong>Busca Padrão (Sem Aspas):</strong> Digite qualquer termo para pesquisar em títulos, resumos, conteúdo e tags.
              </li>
              <li>
                <strong>Busca por Título (Com Aspas Simples '):</strong> Inicie a busca com uma aspas simples (ex: <code>'Arrebatamento</code>) para pesquisar <strong>apenas</strong> nos títulos dos artigos.
              </li>
              <li>
                <strong>Resultados em Tempo Real:</strong> A busca é instantânea. Conforme você digita (após 2 caracteres), as Conexões de Temas e a lista de artigos serão filtrados.
              </li>
              <li>
                <strong>Seleção de Resultados:</strong>
                <ul className="list-circle pl-5 mt-2 space-y-1">
                  <li>Se a busca resultar em <strong>um único artigo</strong>, ele será automaticamente selecionado.</li>
                  <li>Se resultar em <strong>vários artigos</strong>, uma lista aparecerá para você escolher.</li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="mt-2 text-xs text-muted-foreground italic">
            <strong>Dica:</strong> Use a busca com aspas simples para resultados mais precisos quando souber parte do título.
          </p>
        </div>
      )
    });
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm py-4 relative">
      <div className="container mx-auto px-4 relative">
        <h1 className="text-2xl font-bold text-center text-blue-800 dark:text-blue-400">
          ÁGUAS VIVAS QUE CORREM MANSAMENTE
        </h1>
        
        {/* Updated Header Content */}
        <div className="text-center mt-2">
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Bem-vindo ao Painel do Blog
            </h2>
            <button 
              onClick={showMainHelp}
              className="p-1 text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors duration-150"
              aria-label="Ajuda sobre o painel"
            >
              <HelpCircle className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Pesquise artigos para começar ou selecione um tema no painel &apos;Navegador de Temas&apos; abaixo.
          </p>
        </div>
        <div className="flex justify-center items-center mt-1 gap-2">
          <a 
            href="https://otaviotolentino.wordpress.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
          >
            Visitar Blog Original
          </a>
          <button
            onClick={onNotificationClick}
            className="relative p-1 text-gray-400 hover:text-yellow-500 dark:text-gray-500 dark:hover:text-yellow-400 transition-colors duration-150"
            aria-label="Ver notificações"
          >
            <Bell className="h-5 w-5" />
            {hasNotification && (
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800" />
            )}
          </button>
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
          <SearchBar 
            onSearchResults={setSearchResults} 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setIsSearchMode={setIsSearchMode} // Pass the setter here
          />
          <button 
            onClick={showSearchHelp}
            className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-150"
            aria-label="Ajuda da busca"
          >
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;