import { Button, Card } from "flowbite-react";
import React from "react";

const GoogleCard = ({ product }) => {
  const {
    APrice,
    Battery,
    Condition,
    IPrice,
    Storage,
    location,
    name,
    postDate,
    sellerName,
    thumbnail,
  } = product;
  return (
    <div className="lg:w-[32rem] rounded-2xl sm:w-full my-5 mx-5 shadow-md bg-gray-200 border-2">
      <div className="h-48">
        <img
          className="w-full h-full rounded-t-2xl"
          src={thumbnail}
          alt=""
        ></img>
      </div>
      <h3 className="text-lg text-black font-bold text-center">{name}</h3>
    </div>
  );
};

export default GoogleCard;
