import React from 'react';

const GameIcon = ({ game, selectedGame, handleGameClick }) => {
  return (
    <div key={game.id} onClick={() => handleGameClick(game)}>
      <div className="game-icon-container">
        <img className={`slider-icon ${selectedGame === game ? 'selected' : ''}`} src={game.fields.icon[0].url} alt="Game Icon" />
        <div className="game-name-overlay">
          <p className='game-name'>{game.fields.name}</p>
        </div>
      </div>
    </div>
  );
};

export default GameIcon;
