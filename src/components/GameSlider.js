import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaAppStoreIos } from 'react-icons/fa';
import { BiLogoPlayStore } from 'react-icons/bi';

const GameSlider = ({ selectedGame, searchTerm, handleSearch }) => {

  const selectedGameSliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true
  };

  return (
    <div className="selected-game-container">
      <input
        type="text"
        placeholder="Search for a game"
        value={searchTerm}
        onChange={handleSearch}
        className='search-bar'
      />
      <Slider className='single-slider' {...selectedGameSliderSettings}>
        {selectedGame.fields.images.map((image, index) => (
          <div key={index}>
            <img className="game-image" src={image.url} alt="Game Image" />
            <div className="selected-game-details">
              <h2>{selectedGame.fields.name}</h2>
              <p>{selectedGame.fields.about}</p>
            </div>
            <div className="footer">
              <p className='download'>Download for free</p>
              <button className="link-button">
                <a href={selectedGame.fields.aLink}>
                  <FaAppStoreIos /> App Store
                </a>
              </button>
              <button className="link-button">
                <a href={selectedGame.fields.pLink}>
                  <BiLogoPlayStore /> Play Store
                </a>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameSlider;