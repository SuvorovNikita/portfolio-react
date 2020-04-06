import React from 'react';
import './App.module.css';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Skills from "./component/Skills/Skills";
import Project from "./component/Project/Project";

function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Header/>
                <Main/>
                <Skills/>
                <Project/>
            </div>
        </div>
    );
}

export default App;
