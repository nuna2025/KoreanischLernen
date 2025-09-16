
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResult from "../../pages/SearchResult";

const koreanClassics = [
  ['홍길동전', 'classicnovels/hongid'],
  ['흥부와 놀부', 'fairytales/hnid'],
  ['해와달이된 오누이', 'fairytales/sunmondid']
];


const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchResult, setSearchResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = koreanClassics.filter(([title]) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
    setSelectedIndex(-1);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const handleSuggestionClick = (index) => {
    const [title] = suggestions[index];
    setSearchTerm(title);
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  const handleSearch = () => {
    const searchValue = selectedIndex >= 0 ? suggestions[selectedIndex][0] : searchTerm;
    
    const found = koreanClassics.find(([title]) => 
      title.toLowerCase() === searchValue.toLowerCase()
    );

    if (found) {
        // 검색 결과를 찾았을 경우
        setSearchResult({
            title: found[0],
            url: found[1]
        });
        const resultData = {
            title: found[0],
            url: found[1]
        };

        // navigate를 사용하여 /searchresult 경로로 이동하고 상태를 함께 전달
        navigate('/searchresult', { state: resultData });
      
    } else {
        setSearchResult({
            title: 'not',
            url: ''
        });
        // 검색 결과가 없을 경우
        const resultData = {
            title: 'not',
            url: ''
        };

        navigate('/searchresult', { state: resultData });
    
    }
    
    setShowResult(true);
    setShowSuggestions(false);
  };

//   if (showResult) {
//     return (
//       <SearchResult 
//         title={searchResult.title}
//         url={searchResult.url}
//       />
//     );
//   }

  return (

        <div id="search" >
            <div className="search__inner">
                <label htmlFor="searchInput">
                    <span className='ir'>Search</span>
                </label>
                
                <input
                    ref={inputRef}
                    type="search"
                    id="searchInput"
                    placeholder="Name der koreanischen Klassik-Literatur eingeben"
                    autoComplete="off"
                    className="search__input w-full px-6 py-4 text-lg border-none outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => searchTerm && setShowSuggestions(suggestions.length > 0)}
                />

                
                
                
                {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-10 max-h-60 overflow-y-auto">
                        {suggestions.map(([title, url], index) => (
                            <div
                                key={title}
                                className={`px-6 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors ${
                                index === selectedIndex 
                                    ? 'bg-blue-50 text-blue-700' 
                                    : 'hover:bg-gray-50'
                                }`}
                                onClick={() => handleSuggestionClick(index)}
                                onMouseEnter={() => setSelectedIndex(index)}
                            >
                                <div className="flex items-center justify-between">
                                <span className="font-medium">{title}</span>
                                {/* <span className="text-sm text-gray-500">
                                    {url.includes('classicnovels') ? '( ist 고전소설)' : '( ist 전래동화)'}
                                </span> */}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
           

       
  );
};

export default Search;