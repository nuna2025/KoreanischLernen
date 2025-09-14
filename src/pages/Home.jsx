import React from 'react'
import Main from '../components/section/Main'

import KoreanWeather from '../components/contents/KoreanWeather'

import Youtubes from '../components/contents/Youtubes'

const Home = () => {
  return (
    <Main
      title='home'
      description='welcome to home page'
    >
      <div className="home-wrap">
        <article className="home-intro" >
          <h1>Willkommen!</h1>
          <p>Hallo! Diese Website wurde speziell für Muttersprachler des Deutschen entwickelt, die Koreanisch auf einfache und unterhaltsame Weise lernen möchten. Anstatt trockene Lehrbücher zu verwenden, können Sie die Sprache ganz natürlich durch spannende Inhalte erwerben.</p>
          <p>Hier können Sie Koreanisch auf folgende Arten genießen:</p>
          <ul>
            <li>
              <strong>- Übung im Hangeul-Tippen : </strong>
              Gewöhnen Sie sich spielerisch an die Hangeul-Tastaturbelegung.
            </li>
            <li>
              <strong>- Koreanische Volksmärchen : </strong>
              Lernen Sie Vokabeln und Satzstrukturen durch das Lesen von spannenden alten Geschichten.
            </li>
            <li>
              <strong>- Klassische koreanische Romane : </strong>
              Tauchen Sie tiefer in die koreanische Literatur ein, um Sprache und Kultur gleichzeitig zu verstehen.
            </li>
          </ul>
          <p className='home-footer' >Wir laden Sie ein in die Welt einer neuen Sprache!</p>
        </article>

        <KoreanWeather />
        
      </div>
    </Main>
  )
}

export default Home