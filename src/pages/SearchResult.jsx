import React from 'react'
import Main from '../components/section/Main'
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom'; 
import { storiesData } from '../data/stories';
import { novelsData } from '../data/novels';
import StoryCard from '../components/contents/story/StoryCard';

const SearchResult = () => {  

    // useLocation 훅으로 navigate가 전달한 상태(state)를 가져옵니다.
    const location = useLocation();
    const { title, url } = location.state || {}; // 상태가 없을 경우를 대비하여 기본값 설정

    return (
        <Main
        title='Search page'
        description='search page'>
            <dir className='searchresult-container'>
                {title==='not'? 
                <div className ='not-research'>
                    <h2>Verzeihung. Die Geschichte, nach der Sie gesucht haben, ist auf dieser Seite nicht verfügbar. (죄송합니다. 검색 결과를 찾을 수 없습니다.)</h2>
                </div>:
                <div className='searchresult-wordcard'>

                    {url.includes('classicnovels') ? novelsData.map(story => (
                        
                        story.title===title &&
                        <Link to={`/classicnovels/${story.id}`} key={story.id} className="story-link">
                            <StoryCard story={story} />
                        </Link>
                    )) : 
                        storiesData.map(story => (
                        
                        story.title===title &&
                        <Link to={`/fairytales/${story.id}`} key={story.id} className="story-link">
                            <StoryCard story={story} />
                        </Link>
                        ))}
                    
                </div>}
            </dir>
            
        </Main>
    );

}

export default SearchResult