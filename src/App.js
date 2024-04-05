import "./App.css";
import { useState, useEffect } from "react";
import { getGameById, getGames } from "./data/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScrollBox from "./components/ScrollBox";

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
              </div>
              
             
             
            }
          ></Route>
          <Route
            path="/2"
            element={
              <div>
                <h1>Title: {games[2].name}</h1>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
