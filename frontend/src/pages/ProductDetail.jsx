import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeStoreApiProducts } from "../utils/api";
import axios from "axios";
import ProductDetailCard from "../utils/card/ProductDetailCard";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();
  useEffect(() => {
    // fetch items from API
    axios.get(`${fakeStoreApiProducts}/${id}`).then((res) => {
      setProductDetail(res.data);
    });
  }, [id]);
  return (
    <div>
      <ProductDetailCard
        category={productDetail?.category}
        title={productDetail?.title}
        description={productDetail?.description}
        price={productDetail?.price}
        image={productDetail?.image}
        rating={productDetail?.rating}
      />
    </div>
  );
};

export default ProductDetail;
