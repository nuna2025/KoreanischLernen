import React from 'react'
import Main from '../components/section/Main'

import { storiesData } from '../data/stories';
import StoryPage from '../components/contents/StoryPage';
import StoryCard from '../components/contents/story/StoryCard';
import '../assets/scss/section/_stories.scss';

const Fairytales = () => {
    // This is an example to display a single story page.
    const storyToShow = storiesData[0];

    return (
        <Main
        title='korean fairy tales'
        description='korean fairy tales'>
            <div>
                {/* This is for displaying a single story page */}
                <StoryPage story={storyToShow} />

                {/* Below is an example of how you could display a list of story cards on a homepage */}
                {/* <div className="story-list-container">
                    {storiesData.map(story => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                </div>
                */}
            </div>
        </Main>
    )
}

export default Fairytales