import React, {Suspense, lazy} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'))
const Wordgame = lazy(() => import('./pages/Wordgame'))

const StoryDetail = lazy(() => import('./pages/StoryDetail')) // 👈 개별 이야기 페이지
const NovelDetail = lazy(() => import('./pages/NovelDetail')) // 👈 개별 소설 페이지

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
                {/* 👈 새로운 라우트 추가: URL 파라미터를 사용하여 동적으로 페이지를 렌더링합니다. */}
                <Route path="/fairytales/:id" element={<StoryDetail />} />
                <Route path='/classicnovels' element={<Classicnovels />} />    
                <Route path="/classicnovels/:id" element={<NovelDetail />} />         
                <Route path='/youtuber' element={<Youtuber />} />
                <Route path='/youtubes' element={<Youtubes />} />
                <Route path='/search/:searchID' element={<Search />} />
                <Route path='*' element={<Not />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default App