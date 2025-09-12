import React from 'react';

const StoryCard = ({ story }) => {
    return (
        <div className="story-card-preview">
            <img src={story.imageSrc} alt={story.title} className="story-card-image" />
            <div className="story-card-content">
                <h1 className='story-card-title'>{story.title}</h1>
                <p>{story.description}</p>
            </div>
        </div>
    );
};

export default StoryCard;