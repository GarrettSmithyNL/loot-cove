import React, { useState, useEffect } from 'react';
import { getGames } from '../data/api.js'; // Import getGames

const GamesByGenre = () => {
  const [games, setGames] = useState([]); // State for games
  const [selectedGenre, setSelectedGenre] = useState(null); // State for selected genre

  const genres = ['Survival Horror', 'Horror', 'Strategy', 'Simulation', 'Action', 'Role-Playing', 'Sports'];

  useEffect(() => {
    const fetchGames = async () => {
      const allGames = await getGames(); // Fetchs all games
      const games = selectedGenre ? allGames.filter(game => game.genre === selectedGenre) : allGames;
      setGames(games);
    };

    fetchGames();
  }, [selectedGenre]);

  const handleSort = (event) => {
    setSelectedGenre(event.target.value); 
  };

  return (
    <>
      <div>
        <h2 className="sort">Games by genre</h2>
        <select className = "sortBtn" onChange={handleSort}>
          <option value="">Select a genre (All)</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
      <div className="sortedGamesContainer">
        {games.map((game, index) => ( 
          <div key={index} className="gamesImgContainer">
            <div className="sortedGamePrice">{game.price}</div> 
            <img src={game.pictures.thumbnail} alt={game.name} />
            <div className="sortedGameName">{game.name}</div> 
          </div>
        ))}
      </div>
    </>
  );
};

export default GamesByGenre;