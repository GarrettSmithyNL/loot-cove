import { useEffect, useState } from "react";
import { getGamesByIds } from "../data/api";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCartContext = ({ cartById, onClick }) => {
  let [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    const gamesToCart = async () => {
      cartById.sort();
      let games = await getGamesByIds(cartById);
      setCart(games);
    };

    const updateTotal = async () => {
      let temp = 0;
      await gamesToCart();
      cart.forEach((game) => {
        temp += parseFloat(game.price);
      });
      setTotal(temp);
    };

    updateTotal();
  }, [cart]);

  return (
    <>
      <div className="cartContext">
        {cart.map((game) => (
          <ShoppingCartItem
            id={game.id}
            name={game.name}
            price={game.price}
            onClick={onClick}
          />
        ))}
      </div>
      <h1 className="total">Total: ${Math.round(total * 100) / 100}</h1>
    </>
  );
};

export default ShoppingCartContext;
