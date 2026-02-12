import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{background:"#111",padding:"15px",color:"white"}}>
      <Link to="/" style={{marginRight:15}}>Home</Link>
      <Link to="/login" style={{marginRight:15}}>Login</Link>
      <Link to="/register" style={{marginRight:15}}>Register</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
