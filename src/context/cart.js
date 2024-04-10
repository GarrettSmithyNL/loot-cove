// Import necessary hooks and data
import { createContext, useContext, useState } from "react";
import { games } from "../data/api";

// Create a new context for the cart
export const CartContext = createContext();

// Create a provider for the cart context
export const CartProvider = ({ children }) => {
  // Initialize state for the cart
  const [cart, setCart] = useState([]);

  // Return the provider component
  return (
    // Provide the cart and setCart function to children components
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  // Use the cart context
  const context = useContext(CartContext);

  // Function to add a game to the cart
  const addToCart = (id) => {
    // Find the game with the given id
    const game = games.find((game) => game.id === +id);
    // Add the game to the cart
    context.setCart([...context.cart, game]);
  };

  // Function to remove a game from the cart
  const removeFromCart = (id) => {
    // Filter out the game with the given id
    const updatedGames = context.cart.filter((game) => game.id !== id);
    // Update the cart with the filtered games
    context.setCart([...updatedGames]);
  };

  // Throw an error if the context is undefined (i.e., if this hook is used outside a CartProvider)
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  // Return the cart and the addToCart and removeFromCart functions
  return {
    cart: context.cart,
    addToCart,
    removeFromCart,
  };
};
