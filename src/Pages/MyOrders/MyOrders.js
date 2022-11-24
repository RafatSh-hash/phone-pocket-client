import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import OrderCard from "./OrderCard";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(user?.email);
  useEffect(() => {
    fetch(`http://localhost:1000/myorders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user?.email]);

  return (
    <div>
      <div className="lg:w-6/12 sm:w-4/5 mx-auto">
        {orders.map((order) => (
          <OrderCard order={order} key={order._id}></OrderCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
