import React from 'react'
import Main from '../components/section/Main'


import Youtuber from '../components/contents/Youtuber'
import Youtubes from '../components/contents/Youtubes'

const Home = () => {
  return (
    <Main
      title='home'
      description='welcome to home page'
    >
      
      
      <Youtuber />
      <Youtubes />
    </Main>
  )
}

export default Home