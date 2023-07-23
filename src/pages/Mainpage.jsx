import React from 'react';
import Layout from '../components/Layout/layout';
import Main from '../components/Main/main';
import Mainbottom from '../components/Main/mainbottom';
import Footer from '../components/Main/Footer';

function Mainpage(){
    return (
        <>
            <Layout />
            <Main />
            <Mainbottom/>
            <Footer/>
        </>
    )
}

export default Mainpage