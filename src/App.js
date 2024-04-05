import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";

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
                <h1>Title: Garrett</h1>
              </div>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cartById={cartById}
                onClick={removeGame}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
