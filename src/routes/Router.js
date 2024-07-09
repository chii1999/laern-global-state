import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import ProductionDetail from "../pages/product/ProductionDetail";

function Router() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail/:id" element={<ProductionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
