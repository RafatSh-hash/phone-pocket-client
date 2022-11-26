import { Button } from "flowbite-react";
import React from "react";

const WishCard = ({ wish }) => {
  console.log(wish);
  return (
    <div className="mt-10 items-center shadow-md dark:bg-black shadow-gray-600 p-5 rounded-2xl w-9/12 mx-auto lg:flex lg:flex-row sm:flex sm:flex-col justify-between">
      <h3 className="w-24 text-xl font-semibold">{wish.product}</h3>
      <p>{wish.condition}</p>
      <p className="font-bold">$ {wish.price}</p>
      <div>
        <p>{wish.email}</p>
        <div className="mt-3">
          <Button gradientMonochrome="success">Pay now</Button>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
