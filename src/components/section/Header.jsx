import React from 'react'

import { GoHomeFill } from "react-icons/go";
import { GiAcorn } from "react-icons/gi";
import { TfiYoutube } from "react-icons/tfi"; 
import { ImYoutube } from "react-icons/im"; 
import { RiBubbleChartFill } from "react-icons/ri";
import { RiBubbleChartLine } from "react-icons/ri";
// import { RiHeart2Fill } from "react-icons/ri"; <RiHeart2Fill />
import { RiBloggerFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiKakaoTalkFill } from "react-icons/ri";


const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>koreanisch<br />lernen</span>
                </a>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <GoHomeFill /> Home
                        </a>
                    </li>
                    <li>
                        <a href='/wordgame'>
                            <GiAcorn /> Hangul-Tippspiel</a>
                    </li>
                    <li>
                        <a href='/fairytales'>
                            <RiBubbleChartFill /> Koreanisches Märchen
                        </a>
                    </li>
                    <li>
                        <a href='/classicnovels'>
                            <RiBubbleChartLine /> Koreanischer Klassiker
                        </a>
                    </li>
                    <li>
                        <a href='/youtuber'>
                            <TfiYoutube /> Youtuber
                        </a>
                    </li>
                    <li>
                        <a href='/youtubes'>
                            <ImYoutube /> Youtubes
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/wordgame'>한글타자게임</a>
                    </li>
                    <li>
                        <a href='/search/fairytales'>한국전래동화</a>
                    </li>
                    <li>
                        <a href='/search/classicnovels'>한국고전소설</a>
                    </li>
                    
                </ul>
            </nav>
            <div className='header__sns'>
                <ul>
                    <li>
                        <a href="/" rel='noopener noreferrer'>
                            <RiBloggerFill />
                        </a>
                    </li>
                    <li>
                        <a href="/" rel='noopener noreferrer'>
                            <RiGithubFill />
                        </a>
                    </li>
                    <li>
                        <a href="/" rel='noopener noreferrer'>
                            <RiKakaoTalkFill />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header