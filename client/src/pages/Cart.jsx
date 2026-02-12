import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import API from "../api";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleOrder = async () => {
    const token = localStorage.getItem("token");

    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price,
      0
    );

    await API.post(
      "/orders",
      {
        products: cart,
        totalAmount
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Order placed successfully!");
  };

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item._id}>
          <p>{item.name} - €{item.price}</p>
          <button onClick={() => removeFromCart(item._id)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <button onClick={handleOrder}>Place Order</button>
      )}
    </div>
  );
}
