
import React, { useState, useRef, useEffect } from 'react';
import SearchResult from "../../pages/SearchResult";


const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeSuggestion, setActiveSuggestion] = useState(-1);
    const [searchResult, setSearchResult] = useState(null);
    const inputRef = useRef(null);

    // 카테고리별 작품 집합
    const categories = {
        'classicnovels': ['홍길동전'],
        'fairytales': ['흥부와 놀부', '해와달이된 오누이']
    };

    // 모든 작품을 하나의 배열로 만들기 (검색용)
    const allWorks = Object.values(categories).flat();

    // 작품이 어느 카테고리에 속하는지 찾는 함수
    const findCategory = (work) => {
        for (const [category, works] of Object.entries(categories)) {
            if (works.includes(work)) {
                return category;
            }
        }
        return null;
    };

    // 입력값 변경 시 자동완성 목록 필터링
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setActiveSuggestion(-1);

        if (value.length > 0) {
            const filtered = allWorks.filter(work =>
                work.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(filtered.length > 0);
        } else {
            setShowSuggestions(false);
            setFilteredSuggestions([]);
        }
    };

    // 키보드 이벤트 처리
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (activeSuggestion >= 0 && filteredSuggestions[activeSuggestion]) {
                // 활성화된 추천어 선택
                selectSuggestion(filteredSuggestions[activeSuggestion]);
            } else if (inputValue.trim()) {
                // 직접 입력된 값으로 검색
                performSearch(inputValue.trim());
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveSuggestion(prev => 
                prev < filteredSuggestions.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveSuggestion(prev => prev > 0 ? prev - 1 : -1);
        } else if (e.key === 'Escape') {
            setShowSuggestions(false);
            setActiveSuggestion(-1);
        }
    };

    // 추천어 선택
    const selectSuggestion = (suggestion) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        performSearch(suggestion);
    };

    // 검색 실행 및 결과 처리
    const performSearch = (searchTerm) => {
        const category = findCategory(searchTerm);
        
        if (category) {
            // 집합에 있는 경우
            const result = {
                category: category,
                title: searchTerm,
                found: true
            };
            setSearchResult(result);
            
            // searchResult 함수 호출 (실제 구현에서는 이 함수를 props로 받거나 다른 방식으로 처리)
            searchResultFunction(category, searchTerm);
            console.log('검색 결과:', result);
        } else {
            // 집합에 없는 경우
            const result = {
                category: null,
                title: searchTerm,
                found: false
            };
            setSearchResult(result);
            
            // not인 경우 처리
            searchResultFunction('not', searchTerm);
            console.log('검색 결과 - 찾을 수 없음:', result);
        }
    };

    // searchResult 함수 (요청사항에 따라 구현)
    const searchResultFunction = (categoryOrNot, title) => {
        // 이 함수는 검색 결과를 처리하는 함수입니다
        console.log(`searchResult(${categoryOrNot}, ${title})`);
        // 실제 구현에서는 이 결과를 다른 컴포넌트나 상태로 전달할 수 있습니다
    };

    // 입력 필드 포커스 시
    const handleFocus = () => {
        if (inputValue.length > 0 && filteredSuggestions.length > 0) {
            setShowSuggestions(true);
        }
    };

    // 외부 클릭 시 추천 목록 숨기기
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setShowSuggestions(false);
                setActiveSuggestion(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="p-6 max-w-lg mx-auto">
            <div id='search' className="relative" ref={inputRef}>
                <div className='search__inner relative'>
                    <label htmlFor='searchInput' className="block text-sm font-medium text-gray-700 mb-2">
                        <span className='ir sr-only'>Search</span>
                    </label>
                    <input 
                        type='search'
                        id='searchInput'
                        placeholder='Name der koreanischen Klassik-Literatur eingeben'
                        autoComplete='off'
                        className='searchinput w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onFocus={handleFocus}
                    />
                    
                    {/* 자동완성 드롭다운 */}
                    {showSuggestions && (
                        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                            {filteredSuggestions.map((suggestion, index) => {
                                const category = findCategory(suggestion);
                                return (
                                    <li
                                        key={suggestion}
                                        className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                                            index === activeSuggestion ? 'bg-blue-100 text-blue-800' : 'text-gray-700'
                                        }`}
                                        onClick={() => selectSuggestion(suggestion)}
                                        onMouseEnter={() => setActiveSuggestion(index)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span>{suggestion}</span>
                                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                {category}
                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>

            {/* 검색 결과 출력 */}
            {searchResult && (
              <SearchResult category={searchResult.category} title={searchResult.title} />
                // <div className={`mt-6 p-4 rounded-lg border ${
                //     searchResult.found 
                //         ? 'bg-green-50 border-green-200' 
                //         : 'bg-red-50 border-red-200'
                // }`}>
                //     <h3 className={`text-lg font-semibold mb-2 ${
                //         searchResult.found ? 'text-green-800' : 'text-red-800'
                //     }`}>
                //         검색 결과:
                //     </h3>
                    
                //     {/* {searchResult.found ? (
                //         <div className="space-y-2">
                //             <p className="text-green-700">
                //                 <strong>집합:</strong> {searchResult.category}
                //             </p>
                //             <p className="text-green-700">
                //                 <strong>제목:</strong> {searchResult.title}
                //             </p>
                //             <div className="mt-3 p-2 bg-green-100 rounded text-sm">
                //                 <code>searchResult({searchResult.category}, {searchResult.title})</code>
                //             </div>
                //         </div>
                //     ) : (
                //         <div className="space-y-2">
                //             <p className="text-red-700">
                //                 <strong>제목:</strong> {searchResult.title}
                //             </p>
                //             <p className="text-red-700 text-xl font-bold">not</p>
                //             <div className="mt-3 p-2 bg-red-100 rounded text-sm">
                //                 <code>searchResult(not, {searchResult.title})</code>
                //             </div>
                //         </div>
                //     )} */}
                // </div>
            )}

            {/* 카테고리 정보 표시
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-md font-semibold text-gray-800 mb-3">사용 가능한 작품들:</h4>
                <div className="space-y-2">
                    {Object.entries(categories).map(([category, works]) => (
                        <div key={category} className="flex flex-wrap items-center gap-2">
                            <span className="font-medium text-gray-700">{category}:</span>
                            {works.map((work, index) => (
                                <span key={work} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                    {work}{index < works.length - 1 ? ',' : ''}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div> */}

            {/* 사용법 안내
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                <p><strong>사용법:</strong></p>
                <ul className="mt-1 space-y-1">
                    <li>• 작품명을 입력하면 자동완성 목록과 카테고리가 표시됩니다</li>
                    <li>• 집합에 있는 작품: 카테고리와 제목이 함께 출력됩니다</li>
                    <li>• 집합에 없는 작품: "not"이 출력됩니다</li>
                    <li>• 모든 결과는 searchResult(집합이름/not, 제목) 형태로 처리됩니다</li>
                </ul>
            </div> */}
        </div>
    );
};

export default Search;