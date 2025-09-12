import React from 'react';
import { Link } from 'react-router-dom'; 

import Main from '../components/section/Main';
import { storiesData } from '../data/stories';
import StoryCard from '../components/contents/story/StoryCard';
import fairyCoverImg from '../assets/img/story/fairycover.png'

const Fairytales = () => {
    return (
        <Main
            title='korean fairy tales'
            description='korean fairy tales'
        >
            <div className="intro-body">      
                <article className='intro-article'>
                    <h1 className='intro-title'>Lernt Koreanisch mit magischen Volksmärchen!</h1>
                    <section class="introduction">
                        <p>
                            Hallo zusammen! 안녕하세요! <br />
                            Lernst du Koreanisch nur mit Vokabelkarten und Grammatikbüchern? <br />
                            Tauche ein in die Welt der koreanischen Volksmärchen (전래 동화) und lerne die Sprache lebendig und voller Kultur kennen!
                        </p>
                    </section>
                    <section class="intro-list learning-benefits">
                        <ul>
                            <li>
                                <strong> - Einfache Sprache : </strong>
                                Lerne natürliche Alltagsausdrücke und einfache Satzstrukturen 
                                aus den Geschichten.
                            </li>
                            <li>
                                <strong> - Kultur verstehen : </strong> 
                                Erfahre mehr über koreanische Werte wie 
                                <ruby lang="ko"> 정<rt>jeong</rt></ruby> – 
                                emotionale Verbundenheit – und den typischen Humor.
                            </li>
                            <li>
                                <strong> - Mach Spaß : </strong> 
                                Vergiss den Lernstress und tauche in spannende 
                                Erzählungen ein!
                            </li>
                        </ul>
                    </section>
                    <footer class="conclusion">
                        <p>
                            So verbesserst du dein Koreanischund deine Fantasie gleichermaßen!
                        </p>
                    </footer>
                </article>
                <img  src= {fairyCoverImg} alt="korean fairytales cover" className='intro-image' />
            </div>

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