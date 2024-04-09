import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/NavBar";
import ScrollBox from "./components/ScrollBox";
import TrendingNow from "./components/TrendingNow";
import GamesByGenre from "./components/GamesByGenre";

function App() {
  let [cartById, setCartById] = useState([4, 6, 4, 25, 1, 10, 21]);

  useEffect(() => {
    sortGames();
  }, [cartById]);

  let sortGames = () => {
    setCartById(cartById.sort());
  };

  let removeGame = (id) => {
    cartById.splice(cartById.indexOf(id), 1);
    setCartById(cartById);
  };

  

  return (
    <Router>
      <div className="App">
        <h1>Loot Cove</h1>
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
            path="/cart"
            element={
              <div>
          
                <NavBar />
                <ShoppingCart
                  cartById={cartById}
                  onClick={removeGame}
                />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
