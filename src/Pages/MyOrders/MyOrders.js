import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import Spinner from "../../Utilities/Spinner/Spinner";
import OrderCard from "./OrderCard";

const MyOrders = () => {
  const { user, loading } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  console.log(user?.email);
  useEffect(() => {
    fetch(`https://a-12-server.vercel.app/myorders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user?.email]);

  return (
    <div>
      {loading && <Spinner></Spinner>}
      <div className="w-4/5 mx-auto my-20">
        {orders.length === 0 ? (
          <h1 className="text-4xl font-bold text-center text-red-500">
            You haven't booked any order yet.
            <span className="text-blue-500 underline">
              <Link to={"/"}>Order Now</Link>
            </span>
          </h1>
        ) : (
          <div>
            <h1 className="text-3xl font-semibold text-center dark:text-white text-red-500">
              Your Bookings Are Given Below.
              <span className="text-blue-500 underline mx-3">
                <Link to={"/"}>Order More</Link>
              </span>
            </h1>
          </div>
        )}
      </div>

      <div className="lg:w-6/12 sm:w-4/5 mx-auto">
        {orders.map((order) => (
          <OrderCard order={order} key={order._id}></OrderCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
