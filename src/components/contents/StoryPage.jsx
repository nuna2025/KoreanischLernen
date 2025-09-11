import React, { useEffect } from 'react';
import Main from '../../components/section/Main'

import TitleSection from './story/TitleSection';
import StorySection from './story/StorySection';
import VocabularySection from './story/VocabularySection';

const StoryPage = ({ story }) => {
    
    // Set the document title when the component mounts
    useEffect(() => {
        if (story?.title) {
            document.title = `${story.title} - Korean/German Learning`;
        }
    }, [story?.title]);

    // story가 없을 경우 에러 처리
    if (!story) {
        return (
            <Main title='Story Not Found' description='The requested story could not be found.'>
                <div className="main-container">
                    <p>Story not found.</p>
                </div>
            </Main>
        );
    }

    return (
        <Main
         title='fairytale'
         description='korean fairytales'
        >
            <section className='storybody'>
                <div className="main-container">
                    <TitleSection
                        title={story.title}
                        subtitle={story.subtitle}
                        description={story.description}
                        imageSrc={story.imageSrc}
                    />
                    <div className="content-container-single-column">
                        {story.sections?.map((section, index) => (
                            <React.Fragment key={index}>
                                <div className='story-voca-pharagh'>
                                    <StorySection
                                        title={section.title}
                                        sentences={section.sentences}
                                    />
                                    <VocabularySection vocabList={section.vocabulary} />
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default StoryPage;