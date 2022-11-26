import { Button } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Google from "./Google/Google";
import Iphone from "./Iphone/Iphone";
import Samsung from "./Samsung/Samsung";
import { useQuery } from "@tanstack/react-query";
import AdvertiseCard from "./AdvertiseCard/AdvertiseCard";

const Home = () => {
  const {
    data: advertisedProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertisedproducts"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:1000/advertisedproducts", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {}
    },
  });

  return (
    <div className="w-4/5 mx-auto">
      <div className="my-10 p-10">
        <h1 className="text-4xl text-center text-black ">
          Welcome to Phone Pocket! Buy or Sell your old smartphones here.
        </h1>
      </div>
      <Banner></Banner>
      {advertisedProducts.length > 0 ? (
        <AdvertiseCard
          advertisedProducts={advertisedProducts}
          key={advertisedProducts.length}
        ></AdvertiseCard>
      ) : null}

      <div className="my-10 p-10">
        <h1 className="text-4xl text-center text-black ">
          Here Are the categories of our products.
        </h1>
      </div>

      <div>
        <Google></Google>
      </div>
      <div>
        <Samsung></Samsung>
      </div>
      <div>
        <Iphone></Iphone>
      </div>
    </div>
  );
};

export default Home;
