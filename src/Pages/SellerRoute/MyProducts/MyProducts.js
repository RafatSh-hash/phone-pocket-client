import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Context";
import MyProductCard from "./MyProductCard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1000/myproducts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [user?.email]);

  return (
    <div>
      {products.length === 0 ? (
        <div>
          <h1 className="text-red-500 my-10 text-3xl text-center">
            Users haven't order your product yet
          </h1>
        </div>
      ) : (
        <div>
          {" "}
          <h1 className="text-red-500 my-10 text-3xl text-center">
            Here are your ordered products
          </h1>
        </div>
      )}

      <div>
        {products.map((product) => (
          <MyProductCard product={product} key={product._id}></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
