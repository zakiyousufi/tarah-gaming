import React from "react";
import Logo from "../assests/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <div className="links">
        <a className="link" href="#home">Home</a>
        <a className="link" href="#game">Games</a>
        <a className="link" href="#moreApps">More Apps</a>
        <a className="link" href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
