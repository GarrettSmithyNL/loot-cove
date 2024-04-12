import Checkout from "./Checkout";
import ShoppingCartContext from "./ShoppingCartContext";

const ShoppingCart = () => {
  return (
    // This cart screen html which holds both the shoppingcart context and the checkout
    <div className="cartHolder">
      <div className="cart">
        <h2 data-testid="cartHeader">Shopping Cart</h2>
        <ShoppingCartContext />
      </div>
      <div className="checkout">
        <h2 data-testid="checkHeader">Check Out</h2>
        <Checkout />
      </div>
    </div>
  );
};

export default ShoppingCart;
