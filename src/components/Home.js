import React from "react";
import "./style.css";
import SideImage from "../assests/Game.jpg";
const Home = () => {
  return (
    <div id="home" className="home">
      <div className="content">
        <div className="header">
          <h1 className="title">Welcome to Tarah Gaming</h1>
          <span className="sub-text">Your Hub for Exciting Game Downloads!.</span>
        </div>
        <p className="about">Discover and download a world of thrilling games right at your fingertips. Tarah Gaming is your ultimate destination for the latest and greatest games across various genres. Whether you're a casual gamer looking for quick entertainment or a dedicated enthusiast seeking immersive experiences, we've got you covered.
          <br />
          <br /> <br />
          Join the ever-growing community of gamers who rely on This website for their gaming needs. Dive into a world of endless possibilities, where entertainment knows no bounds. Get ready to unleash your inner gamer and embark on unforgettable journeys.
          Browse our collection, find your next gaming obsession, and let the fun begin!
        </p>
      </div>
      <div className="side-image">
        <img className="side-img" src={SideImage} alt="side" />
      </div>
    </div>
  );
};

export default Home;
