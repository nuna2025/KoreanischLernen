import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Wordgame from './pages/Wordgame'
import Fairytales from './pages/Fairytales'
import Classicnovels from './pages/Classicnovels'
import Search from './pages/Search'
import Youtuber from './pages/Youtuber'
import Youtubes from './pages/Youtubes'
import Not from './pages/Not'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/wordgame' element={<Wordgame />} />
            <Route path='/fairytales' element={<Fairytales />} />
            <Route path='/classicnovels' element={<Classicnovels />} />
            <Route path='/search/:searchID' element={<Search />} />
            <Route path='/youtuber' element={<Youtuber />} />
            <Route path='/youtubes' element={< Youtubes/>} />
            <Route path='*' element={<Not />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App