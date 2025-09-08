import React from 'react'
import Main from '../components/section/Main'
import Classicnovels from '../components/contents/Classicnovels'
import Fairytales from '../components/contents/Fairytales'

import Youtuber from '../components/contents/Youtuber'
import Youtubes from '../components/contents/Youtubes'

const Home = () => {
  return (
    <Main
      title='home'
      description='welcome to home page'
    >
      
      <Fairytales />
      <Classicnovels />
      <Youtuber />
      <Youtubes />
    </Main>
  )
}

export default Home