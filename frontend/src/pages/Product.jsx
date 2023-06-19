import React, { useState, useEffect } from "react";
import ProductCard from "../utils/card/ProductCard";
import { fakeStoreApiProducts } from "../utils/api";
import axios from "axios";

// redux
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../redux/productSlice";

const Product = () => {
  // replacing fetch() / axios.get() and useState()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const status = useSelector((state) => state.product.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUS.LOADING) {
    return <p>Loading......</p>;
  } else if (status === STATUS.ERROR) {
    return <p>Error</p>;
  }
  console.log("Product/products", products);
  return (
    <div>
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
