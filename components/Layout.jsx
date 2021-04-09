import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <>
        {/* meta here && navbar */}
        <Meta/>
        <Navbar/>
        <div className="">
            <main>
                {/* header out here */}
                <Header/>
                {children}
            </main>
        </div>
        <Footer/>
            
        </>
    );
}

export default Layout;
