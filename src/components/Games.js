import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GameSlider from './GameSlider';
import GameIcon from './GameIcon';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [slidesToShow, setSlidesToShow] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      const breakpoint = 1157;
      const breakpoint2 = 471;

      if (window.innerWidth < breakpoint2) {
        setSlidesToShow(3);
      } else if(window.innerWidth < breakpoint) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(8);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconSliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('https://api.airtable.com/v0/appL88NhCpTU7CPyA/games', {
          headers: {
            'Authorization': 'Bearer patJU0x7kEA810dtJ.18c89354cd40de0d353668d55f662a5d30c02535db6b40f9e2f54251e061dc92'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }

        const data = await response.json();
        setGames(data.records);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    const defaultSelectedGame = games.find(game => game.fields.name === 'PUBG');
    setSelectedGame(defaultSelectedGame);
  }, [games]);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setSearchTerm('');
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.fields.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id='game' className='games'>
      <h1>Games</h1>
      {selectedGame && (
        <GameSlider
          selectedGame={selectedGame}
          searchTerm={searchTerm}
          handleSearch={handleSearch}
        />
      )}

      <Slider {...iconSliderSettings}>
        {filteredGames.map((game) => (
          <GameIcon
            key={game.id}
            game={game}
            selectedGame={selectedGame}
            handleGameClick={handleGameClick}
          />
        ))}
      </Slider>
    </div>
  );
};

export default GamesList;