import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { fetchAsync } from "./productSlice";
import { addAsync } from "../Cart/cartSlice";
import { useEffect } from "react";

export function Products() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <>
      {products &&
        products.map((product) => {
          return (
            <div className="card">
              <img
                src={product.thumbnail}
                alt="Denim Jeans"
                style={{ width: "100%" }}
              />
              <h1>{product.title}</h1>
              <p className="price">$ {product.price}</p>
              <p>{product.description}</p>
              <p>
                <button onClick={() => dispatch(addAsync(product))}>
                  Add to Cart
                </button>
              </p>
            </div>
          );
        })}
    </>
  );
}
