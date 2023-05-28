import React, { useState, useEffect } from "react";
import ProductCard from "../utils/card/ProductCard";
import { fakeStoreApiProducts } from "../utils/api";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(fakeStoreApiProducts).then((res) => setProducts(res.data));
  }, []);
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
