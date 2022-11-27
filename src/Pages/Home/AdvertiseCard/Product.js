import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Product = ({ product }) => {
  AOS.init({ duration: 500 });
  console.log(product);
  return (
    <div
      data-aos="fade-right"
      className="lg:w-[22%] sm:w-full mt-10 shadow-xl shadow-gray-500 mx-2 dark:bg-black p-3 rounded-2xl"
    >
      <h3 className="text-3xl font-semibold text-center">{product.name}</h3>
      <div className="w-full h-32 mt-3">
        <img
          className="w-full h-full rounded-2xl"
          src={product.thumbnail}
          alt=""
        ></img>
      </div>
      <div className="text-center mt-5">
        <p className="text-lg font-semibold text-sky-500">$ {product.APrice}</p>
        <p className="text-lg font-semibold">{product.Condition}</p>
      </div>
    </div>
  );
};

export default Product;
