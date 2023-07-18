import React, { useEffect, useState } from "react";
import { fetchAsync } from "./features/Cart/cartSlice";

import "./App.css";
import { Products } from "./features/Products/Products";
import { Cart } from "./features/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [showCart, setShowCart] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  return (
    <>
      {" "}
      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? "Back" : "Cart"}
        {!showCart && ` [${items.length}]`}
      </button>
      {showCart ? <Cart /> : <Products />}
    </>
  );
}

export default App;
