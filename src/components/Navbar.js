import React, { useState } from "react";
import Logo from "../assests/Logo.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleLogoClick = () => {
    if (!showLinks) {
      setShowLinks(true);
    }
    else {
      setShowLinks(false);
    }
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        src={Logo}
        alt="logo"
        onClick={handleLogoClick}
      />
      <div className={`links ${showLinks ? "open" : "close"}`}>
        <a className="link" href="#home">
          Home
        </a>
        <a className="link" href="#game">
          Games
        </a>
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://zakiyousufi-portfolio.vercel.app/#projects"
        >
          More Apps
        </a>
        <a className="link" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;