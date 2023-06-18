import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

import Redux from "./pages/test-pages/Redux";

import { Footer, Navbar } from "./components";
import Index from "./pages/Index";

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
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
