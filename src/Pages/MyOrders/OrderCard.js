import { Button } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";

const OrderCard = ({ order }) => {
  const handlePayment = () => {
    toast.error("Sorry! Payment System hasn't been updated yet.");
  };
  return (
    <div className="shadow-lg shadow-gray-600 dark:bg-black  rounded-2xl my-10 p-5">
      <h1 className="text-2xl font-bold">{order.name}</h1>
      <div className="mt-5 font-semibold">
        <p>Price : ${order.price}</p>
        <p>Location : {order.location}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold mb-2">{order.phone}</p>
        <Button onClick={handlePayment} gradientMonochrome="success">
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default OrderCard;
