import { Button } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import GoogleCard from "./GoogleCard";

const Google = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    Axios.get("http://localhost:1000/google").then((data) => {
      setProducts(data.data);
      products.map((p) => setId(p.CatId));
      console.log(id);
    });
  }, []);

  return (
    <div>
      <div className="lg:flex lg:flex-row sm:w-full sm:flex sm:flex-col">
        {products.slice(0, 3).map((product) => (
          <GoogleCard key={product._id} product={product}></GoogleCard>
        ))}
      </div>
      <div className="my-10 lg:w-[20rem] sm:w-[80%] mx-auto">
        <Link to={`/category/${id}`}>
          <Button gradientDuoTone="purpleToPink">See All From Google</Button>
        </Link>
      </div>
    </div>
  );
};

export default Google;
