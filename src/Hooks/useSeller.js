import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://a-12-server.vercel.app/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);

          setIsSellerLoading(false);
        });
    } else {
      console.log("Cannot Find Email");
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
