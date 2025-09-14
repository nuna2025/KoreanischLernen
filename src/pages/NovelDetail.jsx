import React from 'react';
import { useParams } from 'react-router-dom'; // React Router에서 useParams를 가져옵니다.
import StoryPage from '../components/contents/StoryPage';
import { novelsData } from '../data/novels';

const NovelDetail = () => {
    const { id } = useParams(); // URL의 id 파라미터를 가져옵니다.
    const storyToShow = novelsData.find(story => story.id === id); // id와 일치하는 이야기를 찾습니다.

    return <StoryPage story={storyToShow} />;
}

export default NovelDetail