import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IphoneCard from "./IphoneCard";

const Iphone = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("3");
  useEffect(() => {
    fetch(`http://localhost:1000/iphone`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        products.map((p) => setId(p.CatId));
        console.log(id);
      });
  }, []);

  return (
    <div>
      <div className="lg:flex lg:flex-row sm:w-full sm:flex sm:flex-col">
        {products.slice(0, 3).map((product) => (
          <IphoneCard key={product._id} product={product}></IphoneCard>
        ))}
      </div>
      <div className="my-10 w-[20rem] mx-auto">
        <Link to={`/category/${id}`}>
          <Button gradientDuoTone="purpleToPink">
            See All From Apple Iphone
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Iphone;
