import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { useEffect } from "react";
import { deleteAsync, fetchAsync } from "./cartSlice";
import { updateAsync } from "./cartSlice";

export function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleChange(e, id) {
    dispatch(updateAsync({ id, change: { quantity: +e.target.value } }));
  }

  return (
    <div>
      <div>
        {items.map((item) => (
          <div className="cart-item">
            <img className="img-fluid" src={item.thumbnail} alt="" />
            <div className="description">
              <p>{item.title}</p>
              <span>{item.brand}</span>
              <strong>{item.price}</strong>
            </div>
            <div className="quantity">
              Quantity
              <select
                value={item.quantity}
                onChange={(e) => handleChange(e, item.id)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className="close">
              <button onClick={() => dispatch(deleteAsync(item.id))}>X</button>
            </div>
            <h4> Price: {item.quantity * item.price}</h4>
          </div>
        ))}
      </div>
      <h3>
        Total Price:{" "}
        {items.reduce((acc, item) => item.price * item.quantity + acc, 0)}
      </h3>
    </div>
  );
}
