import React from 'react';
import './App.module.scss';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Skills from "./component/Skills/Skills";
import Project from "./component/Project/Project";
import Slogan from "./component/Slogan/Slogan";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

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
