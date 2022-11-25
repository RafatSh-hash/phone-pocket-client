import { Button } from "flowbite-react";
import React from "react";

const SellerCard = ({ seller }) => {
  return (
    <div className="w-3/5 shadow-2xl rounded-2xl mx-auto border-2 bg-gray-200 dark:bg-white dark:text-black border-black p-5 my-5 flex items-center justify-between">
      <div className="flex justify-between w-3/5">
        <h3>{seller.name}</h3>
        <p>{seller.email}</p>
      </div>
      <div className="flex">
        <div className="mx-2">
          <Button gradientMonochrome="teal">Verify</Button>
        </div>
        <div className="mx-2">
          <Button gradientMonochrome="failure">Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
