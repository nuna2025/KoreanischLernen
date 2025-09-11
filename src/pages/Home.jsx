import React from 'react'
import Main from '../components/section/Main'
import NovelPage from '../components/contents/NovelPage'
import StoryPage from '../components/contents/StoryPage'

import Youtuber from '../components/contents/Youtuber'
import Youtubes from '../components/contents/Youtubes'

const Home = () => {
  return (
    <Main
      title='home'
      description='welcome to home page'
    >
      
      <StoryPage />
      <NovelPage />
      <Youtuber />
      <Youtubes />
    </Main>
  )
}

export default Home