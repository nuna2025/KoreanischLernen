import React from 'react'
import Main from '../components/section/Main'
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom'; 
import { storiesData } from '../data/stories';
import { novelsData } from '../data/novels';
import StoryCard from '../components/contents/story/StoryCard';

const SearchResult = () => {  //{title, url}

    // useLocation 훅으로 navigate가 전달한 상태(state)를 가져옵니다.
    const location = useLocation();
    const { title, url } = location.state || {}; // 상태가 없을 경우를 대비하여 기본값 설정

    // ... (뒤로가기 버튼 로직 등)

    // if (title === 'not') {
    //     return (
    //         <div>
    //             <h2>검색 결과를 찾을 수 없습니다.</h2>
    //         </div>
    //     );
    // }

    return (
        <Main
        title='Search page'
        description='search page'>
            {title==='not'? 
            <div>
                <h2>검색 결과를 찾을 수 없습니다.</h2>
            </div>:
            <div>
                <h2>{title}</h2>
                <p>자세한 내용은 <a href={url}>{url}</a>에서 확인하세요.</p>
            </div>}
            {/* <div>
                <h2>{title}</h2>
                <p>자세한 내용은 <a href={url}>{url}</a>에서 확인하세요.</p>
            </div> */}
        </Main>
    );


    //  if (!title && !url) {
    //     return null;
    // }
    // const t=title;
    // const u=url;
    // return (
    //     <Main
    //     title='Search page'
    //     description='search page'>

    //     {t}, {u}
    //     </Main>
    // )


    // return (
    //     <div className="search__result">
    //         {category && <p>집합 이름: {category}</p>}
    //         {title && <p>제목: {title}</p>}
    //     </div>
    // );
}

export default SearchResult