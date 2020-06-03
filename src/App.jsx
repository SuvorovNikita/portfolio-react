import React from 'react';
import styles from './App.module.scss';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Skills from "./component/Skills/Skills";
import Project from "./component/Project/Project";
import Slogan from "./component/slogan/Slogan";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

function App() {
    return (
        <div className="App">

                <div className="portfolio">
                    <Header/>
                    <Main/>
                    <Skills/>
                    <Project/>
                    <Slogan/>
                    <Contact/>
                    <Footer/>
                </div>

        </div>
    );
}

export default App;