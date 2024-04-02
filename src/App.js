import "./App.css";
import { useState, useEffect } from "react";
import { getGameById, getGames } from "./data/api";

function App() {
  console.log(getGames());
  console.log(getGameById(3));
  return <div className="App"></div>;
}

export default App;
