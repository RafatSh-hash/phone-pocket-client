import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import WishCard from "./WishCard";

const MyWishlist = () => {
  const { user } = useContext(AuthContext);

  const { data: wishlist = [] } = useQuery({
    queryKey: ["mywishes", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:1000/mywishes?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {wishlist.map((wish) => (
        <WishCard wish={wish} key={wish._id}></WishCard>
      ))}
    </div>
  );
};

export default MyWishlist;
