import React from "react";
import { useQuery } from "@tanstack/react-query";
import SellerCard from "./SellerCard";
import useTitle from "../../../Hooks/useTitle";

const AllSellers = () => {
  useTitle("All Sellers");
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:1000/sellers");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div>
      {sellers.map((seller) => (
        <SellerCard
          refetch={refetch}
          key={seller._id}
          seller={seller}
        ></SellerCard>
      ))}
    </div>
  );
};

export default AllSellers;
