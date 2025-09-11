import React from 'react';

const StoryCard = ({ story }) => {
    return (
        <div className="story-card-preview">
            <img src={story.imageSrc} alt={story.title} className="story-card-image" />
            <div className="story-card-content">
                <h3>{story.title}</h3>
                <p>{story.subtitle}</p>
            </div>
        </div>
    );
};

export default StoryCard;