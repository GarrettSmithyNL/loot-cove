import { GiSwordClash } from "react-icons/gi";
import { useCart } from "../context/cart";


const ShoppingCartItem = ({ id, name, price }) => {
  // Use the removeFromCart function from the useCart hook
  const { removeFromCart } = useCart();

  // Return the JSX for the shopping cart item
  return (
    // The cart item is wrapped in a div with a class of "cartItem"
    <div className="cartItem">
      <h3 className="title">{name}</h3>
      <h3 className="price">${price}</h3>
      <GiSwordClash
        className="delete"
        style={{
          color: "red",
          cursor: "pointer",
        }}
        // When the delete icon is clicked, the removeFromCart function is called with the id of the item
        onClick={() => removeFromCart(id)}
      />
    </div>
  );
};

// Export the ShoppingCartItem component as the default export
export default ShoppingCartItem;
