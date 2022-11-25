import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Context";
import MyProductCard from "./MyProductCard";
import Axios from "axios";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:1000/myproducts?email=${user?.email}`).then(
      (data) => {
        console.log(data.data);
        setProducts(data.data);
      }
    );
  }, [user?.email]);

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
          <MyProductCard product={product} key={product._id}></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
