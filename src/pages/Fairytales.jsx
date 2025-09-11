import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Link 컴포넌트를 추가합니다.

import Main from '../components/section/Main';
import { storiesData } from '../data/stories';
import StoryCard from '../components/contents/story/StoryCard';
import '../assets/scss/section/_stories.scss';

const Fairytales = () => {
    return (
        <Main
            title='korean fairy tales'
            description='korean fairy tales'
        >
            <div className="story-list-container">
                {/* storiesData 배열을 순회하며 각 이야기에 대한 StoryCard를 렌더링합니다. */}
                {storiesData.map(story => (
                    // 👈 각 StoryCard를 <Link>로 감싸서 클릭 가능하게 만듭니다.
                    // to 속성에는 해당 이야기의 고유 ID를 사용하여 동적 URL을 생성합니다.
                    <Link to={`/fairytales/${story.id}`} key={story.id} className="story-link">
                        <StoryCard story={story} />
                    </Link>
                ))}
            </div>
        </Main>
    )
}

export default Fairytales