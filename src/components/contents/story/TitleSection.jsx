import React from 'react'

const TitleSection = ({ title, subtitle, description, imageSrc }) => {
    return (
        <div className="title-section">
            <img src={imageSrc} className="title-image" alt={`${title} 일러스트`} />
            <div className="title-content">
                <h1 className="main-title">{title}</h1>
                <p className="subtitle">{subtitle}</p>
                <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
};

export default TitleSection