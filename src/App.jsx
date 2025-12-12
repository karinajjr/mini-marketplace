import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </div>
  );
}
