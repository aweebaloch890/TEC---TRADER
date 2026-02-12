import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{border:"1px solid pink",padding:20,margin:10}}>
      <h3>{product.name}</h3>
      <p>€{product.price}</p>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
}
