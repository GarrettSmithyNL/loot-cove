import { useState, useEffect } from "react";

const Checkout = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("./loot-coveapi.js");
  });

  return <div>Checkout</div>;
};

export default Checkout;
