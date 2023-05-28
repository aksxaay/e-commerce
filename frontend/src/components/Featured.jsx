import React, { useState, useEffect } from "react";
import FeaturedProductCard from "../utils/card/FeaturedProductCard";
import axios from "axios";
import { fakeStoreApiProducts } from "../utils/api";
const Featured = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(fakeStoreApiProducts).then((res) => setProducts(res.data));
  }, []);

  console.log("products", products);
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <FeaturedProductCard name={product.title} price={product.price}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
