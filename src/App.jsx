import React from 'react';

import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Skills from "./component/Skills/Skills";
import Project from "./component/Project/Project";
import Slogan from "./component/slogan/Slogan";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

import styles from './App.module.scss'


function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Project/>
            <Slogan/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
