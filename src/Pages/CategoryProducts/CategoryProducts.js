import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GoogleCard from "../Home/Google/GoogleCard";
import ProductCard from "./ProductCard";

const CategoryProducts = () => {
  const products = useLoaderData();

  console.log(products);
  return (
    <div className="lg:w-4/5 lg:mx-auto sm:w-full">
      <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-evenly sm:flex sm:flex-col sm:justify-center mt-10">
        {products.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
