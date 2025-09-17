import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from './Header';
import Footer from './Footer';
import Search from './Search';


const Main = ( props ) => {
    return (
        <>
        <Header />
        <Search />
        <main id='main' role='main'>
            {props.children}    
        </main>
        <Footer />
        </>
        // <HelmetProvider>
        //     <Helmet
        //         titleTemplate='%s | Koreanisch Lernen'
        //         defaultTitle='Koreanisch Lernen'
        //         defer={false}
        //     >
        //         {props.title&&<title>{props.title}</title>}
        //         <meta name='description' content={props.description} />
        //     </Helmet>

        //     <Header />
        //     <Search />
        //     <main id='main' role='main'>
        //         {props.children}    
        //     </main>
        //     <Footer />
            
        // </HelmetProvider>
    )
}

export default Main