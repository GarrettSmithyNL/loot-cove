import "./App.css";
import { useState, useEffect } from "react";
import { getGameById, getGames } from "./data/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScrollBox from "./components/ScrollBox";
import TrendingNow from "./components/TrendingNow";
import GamesByGenre from "./components/GamesByGenre";

function App() {
  const games = getGames();
  console.log(games);





  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
               <NavBar />
               <ScrollBox />
               <TrendingNow />
               <GamesByGenre />
              </div>
              
             
             
            }
          ></Route>
          <Route
            path="/2"
            element={
              <div>
                <h1>Title: {games[2].name}</h1>
                <NavBar />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
