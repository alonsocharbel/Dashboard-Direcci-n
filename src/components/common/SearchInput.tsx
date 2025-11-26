import { useState, useRef, useEffect, ReactNode } from 'react';
import { Search, X } from 'lucide-react';

// Simple controlled input version
interface SimpleSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

// Advanced autocomplete version
interface AutocompleteSearchInputProps<T> {
  placeholder?: string;
  onSearch: (query: string) => T[];
  onSelect: (item: T) => void;
  renderItem: (item: T) => ReactNode;
  getItemKey: (item: T) => string;
  minChars?: number;
}

// Type guard to check which type of props we have
type SearchInputProps<T = unknown> = SimpleSearchInputProps | AutocompleteSearchInputProps<T>;

function isSimpleSearchInput(props: SearchInputProps): props is SimpleSearchInputProps {
  return 'value' in props && 'onChange' in props;
}

export function SearchInput<T>(props: SearchInputProps<T>) {
  if (isSimpleSearchInput(props)) {
    return <SimpleSearchInput {...props} />;
  }
  return <AutocompleteSearchInput {...props} />;
}

function SimpleSearchInput({ value, onChange, placeholder = 'Buscar...', className = '' }: SimpleSearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
      {value && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

function AutocompleteSearchInput<T>({
  placeholder = 'Buscar...',
  onSearch,
  onSelect,
  renderItem,
  getItemKey,
  minChars = 3,
}: AutocompleteSearchInputProps<T>) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= minChars) {
      const searchResults = onSearch(query);
      setResults(searchResults);
      setIsOpen(searchResults.length > 0);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, onSearch, minChars]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleSelect(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  const handleSelect = (item: T) => {
    onSelect(item);
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-auto"
        >
          {results.map((item, index) => (
            <div
              key={getItemKey(item)}
              onClick={() => handleSelect(item)}
              className={`cursor-pointer ${
                index === selectedIndex ? 'bg-primary-50' : 'hover:bg-gray-50'
              }`}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      )}

      {query.length > 0 && query.length < minChars && (
        <p className="absolute z-50 w-full mt-1 p-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg">
          Escribe al menos {minChars} caracteres para buscar
        </p>
      )}

      {query.length >= minChars && results.length === 0 && (
        <p className="absolute z-50 w-full mt-1 p-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-lg">
          No se encontraron resultados
        </p>
      )}
    </div>
  );
}
