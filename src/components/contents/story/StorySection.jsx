import React from 'react';

const StorySection = ({ title, sentences }) => {
    return (
        <div className="story-section">
            <h2>{title}</h2>
            {sentences.map((sentence, index) => (
                <p key={index}>
                    <span className="hoverable-sentence">
                        {sentence.korean}
                        <span className="tooltip">{sentence.german}</span>
                    </span>
                </p>
            ))}
        </div>
    );
};

export default StorySection;