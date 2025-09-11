import React, { useEffect } from 'react';
import Main from '../../components/section/Main'

import TitleSection from './story/TitleSection';
import StorySection from './story/StorySection';
import VocabularySection from './story/VocabularySection';

const StoryPage = ({ story }) => {
    
    // Set the document title when the component mounts
    useEffect(() => {
        document.title = `${story.title} - Korean/German Learning`;
    }, [story.title]);

    return (
        <Main
         title='fairytale'
         description='korean fairytales'
        >
            <div className="main-container">
                <TitleSection
                    title={story.title}
                    subtitle={story.subtitle}
                    description={story.description}
                    imageSrc={story.imageSrc}
                />
                <div className="content-container-single-column"> 
                    {story.sections.map((section, index) => (
                        // 각 섹션과 그에 해당하는 어휘 목록을 함께 렌더링합니다.
                        <React.Fragment key={index}>
                            <StorySection
                                title={section.title}
                                sentences={section.sentences}
                            />
                            {/* 해당 섹션의 어휘 목록만 전달합니다. */}
                            <VocabularySection vocabList={section.vocabulary} />
                        </React.Fragment>
                    ))}s
                </div>
            </div>
        </Main>
    );
};

export default StoryPage;