import React from 'react';

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
    )
}

export default Main