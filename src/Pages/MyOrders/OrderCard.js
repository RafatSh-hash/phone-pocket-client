import { Button } from "flowbite-react";
import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="shadow-lg shadow-gray-600 dark:bg-black  rounded-2xl my-10 p-5">
      <h1 className="text-2xl font-bold">{order.name}</h1>
      <div className="mt-5 font-semibold">
        <p>Price : ${order.price}</p>
        <p>Location : {order.location}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold mb-2">{order.phone}</p>
        <Button gradientMonochrome="success">Pay Now</Button>
      </div>
    </div>
  );
};

export default OrderCard;
