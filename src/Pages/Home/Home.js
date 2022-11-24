import { Button } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Google from "./Google/Google";
import Iphone from "./Iphone/Iphone";
import Samsung from "./Samsung/Samsung";

const Home = () => {
  const allProducts = useLoaderData();

  return (
    <div className="w-4/5 mx-auto">
      <div className="my-10 p-10">
        <h1 className="text-4xl text-center text-black ">
          Welcome to Phone Pocket! Buy or Sell your old smartphones here.
        </h1>
      </div>
      <Banner></Banner>
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
