import React from 'react';
import { Link } from 'react-router-dom'; 

import Main from '../components/section/Main';
import { novelsData } from '../data/novels';
import StoryCard from '../components/contents/story/StoryCard';
import novelCoverImg from '../assets/img/novel/kclassiccover-1-min.png'

const Classicnovels = () => {
   return (
        <Main
            title='korean fairy tales'
            description='korean fairy tales'
        >
            <div className="intro-body">      
                <article className='intro-article'>
                    <h1 className='intro-title'>Entdecke die tiefgründigen Geschichten Koreas durch seine alten Romane!</h1>
                    <section class="introduction">
                        <p>
                            Hallo zusammen! <br />
                            Taucht jetzt ein in die Welt der alten Romane <br />
                            und lernt die reiche Kultur und die Weisheiten des Lebens auf lebendige Weise kennen! 
                        </p>
                    </section>
                    <section class="intro-list learning-benefits">
                        <ul>
                            <li>
                                <strong> - Vielfältige Geschichten : </strong>
                                Erlebt die Fantasie der Koreaner durch spannende Heldentaten, wunderschöne Liebesgeschichten und unglaubliche Abenteuer.
                            </li>
                            <li>
                                <strong> - Moral und Werte : </strong> 
                                 Lernt auf natürliche Weise traditionelle koreanische Werte kennen, wie zum Beispiel 'Gwonsun-jingak' (권선징악), was bedeutet, dass gute Taten belohnt und böse Taten bestraft werden.
                            </li>
                            <li>
                                <strong> - Literarische Ausdrucksweise : </strong> 
                                Erfahrt die Tiefe und Schönheit der koreanischen Sprache durch elegante und alte literarische Stile.
                            </li>
                        </ul>
                    </section>
                    <footer class="conclusion">
                        <p>
                            Erweitert mit den alten Romanen gleichzeitig eure Koreanischkenntnisse und euer Verständnis für die koreanische Kultur!
                        </p>
                    </footer>
                </article>
                <img  src= {novelCoverImg} alt="korean classical novel cover" className='intro-image' />
            </div>

            <div className="story-list-container">
                {/* storiesData 배열을 순회하며 각 이야기에 대한 StoryCard를 렌더링합니다. */}
                {novelsData.map(story => (
                    // 👈 각 StoryCard를 <Link>로 감싸서 클릭 가능하게 만듭니다.
                    // to 속성에는 해당 이야기의 고유 ID를 사용하여 동적 URL을 생성합니다.
                    <Link to={`/classicnovels/${story.id}`} key={story.id} className="story-link">
                        <StoryCard story={story} />
                    </Link>
                ))}
            </div>
        </Main>
    )
}

export default Classicnovels