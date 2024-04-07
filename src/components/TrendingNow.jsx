import React, { useState, useEffect } from 'react';
import { getGameById } from '../data/api.js';

const TrendingNow = () => {
  const [mainGame, setMainGame] = useState(null);
  const [otherGames, setOtherGames] = useState([]);

  useEffect(() => {
    const mainGame = getGameById(13);
    const otherGames = [6, 11, 16].map(getGameById);
    setMainGame(mainGame);
    setOtherGames(otherGames);
  }, []);

  return (
    <>
      <div>
        <h2 className="trendingHead">Trending Now</h2>
      </div>
      <div className="trendingContainer">
        <div className="mainTrendGame">
          {mainGame && (
            <>
              <img src={mainGame.pictures.thumbnail} alt={mainGame.name} />
              <div className="gameName">{mainGame.name}</div>
              <div className="gamePrice">{mainGame.price}</div>
              <div className = "gameDev">{mainGame.developer}</div>
            </>
          )}
        </div>
        <div className="threeTrendGameBox">
          {otherGames.map((game, index) => (
            <div key={index} className="threeTrendGameImages">
              {game && (
                <>
                  <img src={game.pictures.thumbnail} alt={game.name} />
                  <div className="gameName">{game.name}</div>
                  <div className="gamePrice">{game.price}</div>
                  <div className = "gameDev">{game.developer}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingNow;