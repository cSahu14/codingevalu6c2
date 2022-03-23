import { Route, Routes } from "react-router-dom";
import App from "../App";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Products } from "../components/ProductsDashboard";
import { SingleProductList } from "../components/SingleProduct";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/products" element={<Products />}>
            Products
          </Route>
          <Route path="/products/:id" element={<SingleProductList />}></Route>
        </Route>
      </Routes>
    </>
  );
};
