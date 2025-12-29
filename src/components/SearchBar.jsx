import {Search, X } from 'lucide-react'

const SearchBar = ({ searchWord, onSearchChange, resultCount}) => {
  
  // Efface la recherche quand on clique sur le X
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          value={searchWord}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher une transaction..."
          className="
            w-full pl-12 pr-12 py-3 text-lg   
            border-2 border-gray-200 rounded-2xl 
            focus:outline-none                    
            focus:border-blue-400                
            focus:ring-3 focus:ring-blue-100    
            transition-all duration-200         
            placeholder-gray-400                
          "
          aria-label="Rechercher une transaction"
        />

        {searchWord && (
          <button
            onClick={handleClear}
            className="
              absolute inset-y-0 right-0 pr-4  
              flex items-center             
              text-gray-400 hover:text-gray-600 
              transition-colors         
            "
            aria-label="Effacer la recherche"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
     
        <div className="mt-3 text-sm text-gray-600 px-2">
          {resultCount > 0 ? (
            // Si on a des résultats
            <span>
              <span className="font-semibold text-blue-600">{resultCount}</span>
              {' '}résultat{resultCount > 1 ? 's' : ''}
            </span>
          ) : (
            // Si aucun résultat
            <span className="text-red-500 font-medium">
              Aucun résultat trouvé
            </span>
          )}
        </div>
      
    </div>
  );
};

export default SearchBar;