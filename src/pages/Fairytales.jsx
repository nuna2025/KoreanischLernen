import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Link 컴포넌트를 추가합니다.

import Main from '../components/section/Main';
import { storiesData } from '../data/stories';
import StoryCard from '../components/contents/story/StoryCard';
import '../assets/scss/section/_stories.scss';

const Fairytales = () => {
    return (
        <Main
            title='korean fairy tales'
            description='korean fairy tales'
        >
            
            {/* <article class="korean-learning-content" lang="de">
                <header>
                    <h1>Lernt Koreanisch mit magischen Volksmärchen!</h1>
                    <p class="greeting">Hallo zusammen! 
                        <span lang="ko">안녕하세요</span>
                    </p>
                </header>

                <main>
                    <section class="introduction">
                        <p>Lernst du Koreanisch nur mit Vokabelkarten und Grammatikbüchern? 
                        Tauche ein in die Welt der 
                        <strong lang="ko">koreanischen Volksmärchen (전래 동화)</strong> 
                        und lerne die Sprache <em>lebendig</em> und voller Kultur kennen!</p>
                    </section>

                    <section class="learning-benefits">
                        <ul>
                            <li>
                                <strong>Einfache Sprache:</strong> 
                                Lerne natürliche Alltagsausdrücke und einfache Satzstrukturen 
                                aus den Geschichten.
                            </li>
                            <li>
                                <strong>Kultur verstehen:</strong> 
                                Erfahre mehr über koreanische Werte wie 
                                <ruby lang="ko">정<rt>jeong</rt></ruby> – 
                                emotionale Verbundenheit – und den typischen Humor.
                            </li>
                            <li>
                                <strong>Mach Spaß:</strong> 
                                <mark>Vergiss den Lernstress</mark> und tauche in spannende 
                                Erzählungen ein!
                            </li>
                        </ul>
                    </section>

                    <section class="story-examples">
                        <h2>Bekannte Märchen</h2>
                        <p>Wie wäre es zum <em>Einstieg</em> mit bekannten Märchen wie:</p>
                        <ul>
                            <li>
                                <span lang="ko">"흥부와 놀부"</span> 
                                (<span lang="de">Heungbu und Nolbu</span>)
                            </li>
                            <li>
                                <span lang="ko">"토끼의 간"</span> 
                                (<span lang="de">Die Leber des Hasen</span>)
                            </li>
                        </ul>
                    </section>

                    <footer class="conclusion">
                        <p>So verbesserst du dein <mark>Koreanisch</mark> und deine 
                        <mark>Fantasie</mark> gleichermaßen!</p>
                    </footer>
                </main>
            </article> */}

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