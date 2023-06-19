import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Redux from "./pages/test-pages/Redux";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <>
      <div className="dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* test pages routes */}
          <Route path="/redux" element={<Redux />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
