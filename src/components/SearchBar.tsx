import React, { useState, useEffect, useRef } from 'react';
import { Article, searchArticles } from '../data/blogData';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearchResults: (results: Article[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsSearchMode: (isSearching: boolean) => void; // Add this prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults, searchQuery, setSearchQuery, setIsSearchMode }) => {
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length > 2) {
      setIsSearching(true);
      setIsSearchMode(true); // Activate search mode
      const results = searchArticles(searchQuery);
      onSearchResults(results);
      // Stop the loading indicator after results are returned
      setTimeout(() => {
        setIsSearching(false);
      }, 300);
    } else if (searchQuery.trim().length === 0) {
      onSearchResults([]);
      setIsSearchMode(false); // Deactivate search mode
      setIsSearching(false);
    }
  }, [searchQuery, onSearchResults, setIsSearchMode]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length > 0) {
      const results = searchArticles(searchQuery);
      onSearchResults(results);
    }
  };

  return (
    <div className="search-container w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquisar artigos por título, conteúdo ou tags..."
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <Search size={18} />
        </button>
        {isSearching && searchQuery.trim().length > 0 && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
