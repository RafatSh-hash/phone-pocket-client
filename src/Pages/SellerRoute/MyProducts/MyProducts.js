import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Context";
import MyProductCard from "./MyProductCard";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useTitle from "../../../Hooks/useTitle";

const MyProducts = () => {
  useTitle("My Products");
  const { user } = useContext(AuthContext);
  // const [products, setProducts] = useState([]);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["myproducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://a-12-server.vercel.app/myproducts?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      {products.length === 0 ? (
        <div>
          <h1 className="text-red-500 dark:text-white my-10 text-3xl text-center">
            You haven't posted any product yet.
          </h1>
        </div>
      ) : (
        <div>
          {" "}
          <h1 className="text-red-500 dark:text-white  my-10 text-3xl text-center">
            Here are your posted products
          </h1>
        </div>
      )}

      <div>
        {products.map((product) => (
          <MyProductCard
            refetch={refetch}
            product={product}
            key={product._id}
          ></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
