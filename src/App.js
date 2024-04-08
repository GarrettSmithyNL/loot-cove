import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import ShoppingCart from "./components/ShoppingCart";
=======
import NavBar from "./components/NavBar";
import ScrollBox from "./components/ScrollBox";
import TrendingNow from "./components/TrendingNow";
import GamesByGenre from "./components/GamesByGenre";
>>>>>>> origin/master

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
<<<<<<< HEAD
                <h1>Title: Garrett</h1>
=======
               <NavBar />
               <ScrollBox />
               <TrendingNow />
               <GamesByGenre />
>>>>>>> origin/master
              </div>
              
             
             
            }
          ></Route>
          <Route
            path="/cart"
            element={
<<<<<<< HEAD
              <ShoppingCart
                cartById={cartById}
                onClick={removeGame}
              />
=======
              <div>
                <h1>Title: {games[2].name}</h1>
                <NavBar />
              </div>
>>>>>>> origin/master
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
