import React from 'react'
import Main from '../components/section/Main'
import StoryCardWithLink from '../components/contents/StoryCardWithLink';
import { youtubersData } from '../data/youtubers';

import youtuberImg from '../assets/img/youtuber-cute-min.png'

const Youtuber = () => {

    return (
        <Main
        title='youtuber for learning korean'
        description='youtuber for learning korean'>
            <div className="intro-body">      
                <article className='intro-article'>
                    <h1 className='intro-title'>Möchtest du Koreanisch auf Deutsch lernen?</h1>
                    <section class="introduction">
                        <p>
                            Hier stellen wir YouTuber vor, die zwar keine professionellen Lehrer sind, aber mit viel Leidenschaft und Spaß Koreanisch für deutschsprachige Lernende vermitteln.
                            
                        </p>
                    </section>
                    
                    <footer class="conclusion">
                        <p>
                            Mit diesen Kanälen wird dein Koreanischlernen garantiert viel mehr Spaß machen!
                        </p>
                    </footer>
                </article>
                <img  src= {youtuberImg} alt="youtuber introduce for learning korean" className='intro-image youtuber-introimg' />
            </div>

            <div className="youtuber-list-container">
                {youtubersData.map(story => (
                    <StoryCardWithLink story={story} />
                ))}
            </div>

        </Main>
    )
}

export default Youtuber