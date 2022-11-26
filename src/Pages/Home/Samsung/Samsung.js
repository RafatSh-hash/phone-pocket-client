import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SamsungCard from "./SamsungCard";

const Samsung = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("2");
  useEffect(() => {
    fetch(`http://localhost:1000/samsung`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        products.map((p) => setId(p.CatId));
      });
  }, []);

  return (
    <div>
      <div className="lg:flex lg:flex-row sm:w-full sm:flex sm:flex-col">
        {products.slice(0, 3).map((product) => (
          <SamsungCard key={product._id} product={product}></SamsungCard>
        ))}
      </div>
      <div className="my-10 lg:w-[20rem] sm:w-[80%] mx-auto">
        <Link to={`/category/${id}`}>
          <Button gradientDuoTone="purpleToPink">See All From Samsung</Button>
        </Link>
      </div>
    </div>
  );
};

export default Samsung;
