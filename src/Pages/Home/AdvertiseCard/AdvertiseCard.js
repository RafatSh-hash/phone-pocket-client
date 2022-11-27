import React from "react";
import Product from "./Product";

const AdvertiseCard = ({ advertisedProducts }) => {
  console.log(advertisedProducts);
  return (
    <div>
      <div className="mt-20">
        <h2 className="text-center text-3xl  font-bold mt-5">
          Advertised Products
        </h2>
      </div>
      <div className="lg:flex lg:flex-row lg:flex-wrap sm:flex sm:flex-col justify-center w-11/12 mx-auto">
        {advertisedProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AdvertiseCard;
