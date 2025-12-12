import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">
        Products
      </NavLink>
      <NavLink to="/cart" className="nav-link">
        Cart
      </NavLink>
    </nav>
  );
}
