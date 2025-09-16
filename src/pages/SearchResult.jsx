import React from 'react'
import Main from '../components/section/Main'

import { Link } from 'react-router-dom'; 
import { storiesData } from '../data/stories';
import { novelsData } from '../data/novels';
import StoryCard from '../components/contents/story/StoryCard';

const SearchResult = ({category, title}) => {

     if (!category && !title) {
        return null;
    }
    const c=category;
    const t=title;
    return (
        <Main
        title='Search page'
        description='search page'>

        {c}, {t}
        </Main>
    )


    // return (
    //     <div className="search__result">
    //         {category && <p>집합 이름: {category}</p>}
    //         {title && <p>제목: {title}</p>}
    //     </div>
    // );
}

export default SearchResult