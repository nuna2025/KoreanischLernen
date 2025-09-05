import React, {Suspense, lazy} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'))
const Wordgame = lazy(() => import('./pages/Wordgame'))
const Fairytales = lazy(() => import('./pages/Fairytales'))
const Classicnovels = lazy(() => import('./pages/Classicnovels'))
const Search = lazy(() => import('./pages/Search'))
const Youtuber = lazy(() => import('./pages/Youtuber'))
const Youtubes = lazy(() => import('./pages/Youtubes'))
const Not = lazy(() => import('./pages/Not'))


function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={ <Main/> }> {/* chage to Main for SEO */}
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
        </Suspense>
    </BrowserRouter>
  )
}

export default App