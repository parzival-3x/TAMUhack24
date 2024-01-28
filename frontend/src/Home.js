import './App.css';
import Scheduler from './components/Scheduler';
import Navbar from './components/Navbar';

import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

export function Home() {
    return (
        <div className="App">
            <Navbar />
            <h1 id="home-header">
                Find And Book <br />A Magical Experience
            </h1>
            <div className="d-flex justify-content-center">
                <div id="hero-img-container">
                    <img id="sky-bg" src="..//img/sky-background.jpg" alt="sky background" />
                    <img id="plane-img" src="..//img/plane-transparent.png" alt="" />
                </div>
            </div>
            <Scheduler />
        </div>
    )
}