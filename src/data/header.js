import { GoHomeFill } from "react-icons/go";
import { GiAcorn } from "react-icons/gi";
import { TfiYoutube } from "react-icons/tfi"; 
import { ImYoutube } from "react-icons/im"; 
import { RiBubbleChartFill } from "react-icons/ri";
import { RiBubbleChartLine } from "react-icons/ri";
import { RiBloggerFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiKakaoTalkFill } from "react-icons/ri";
                               

export const headerMenus = [
    {
        title:"Home",
        icon:<GoHomeFill />,
        src:"/"
    },
     {
        title:"Hangul-Tippspiel",
        icon:<GiAcorn />,
        src:"/wordgame"
    },
     {
        title:"Koreanisches Märchen",
        icon:<RiBubbleChartFill />,
        src:"/fairytales"
    },
     {
        title:"Koreanischer Klassiker",
        icon:<RiBubbleChartLine />,
        src:"/classicnovels"
    },
     {
        title:"Youtuber",
        icon:<TfiYoutube />,
        src:"/youtuber"
    },
     {
        title:"Youtubes",
        icon:<ImYoutube />,
        src:"/youtubes"
    }
]
  
export const searchKeyword = [
    {
        title:"한글타자게임",
        src:"/wordgame"
    },
     {
        title:"한국전래동화",
        src:"/fairytales"
    },
     {
        title:"한국고전소설",
        src:"/classicnovels"
    }
]

export const snsLink = [
    {
        title: "googleblog",
        url: "https://kozeit.blogspot.com/",
        icon: <RiBloggerFill />
    },
    {
        title: "githubblog",
        url: "/",
        icon: <RiGithubFill />
    },
    {
        title: "kakaotalk",
        url: "https://open.kakao.com/o/gwiNVBSh",
        icon: <RiKakaoTalkFill />
    }
]