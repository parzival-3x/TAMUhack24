// Home.jsx
import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import Scheduler from './components/Scheduler';
import Navbar from './components/Navbar';

export function Home() {
  const [flyOff, setFlyOff] = useState(false);

  const handlePlaneFlyOff = () => {
    setFlyOff(true);
  };

  return (
    <div className="App">
      <Navbar />
      <h1 id="home-header">
        Find And Book <br />A Magical Experience
      </h1>
      <div className="d-flex justify-content-center">
        <div id="hero-img-container">
          <img id="sky-bg" src="..//img/sky-background.jpg" alt="sky background" />
          <img id="plane-img" src="..//img/plane-transparent.png" alt="" className={`flying-image ${flyOff ? 'fly-off' : 'hovering'}`} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="clickable-area" onClick={handlePlaneFlyOff}>
          TO FREEDOM
        </button>
      </div>
      <Scheduler />
    </div>
  );
}
