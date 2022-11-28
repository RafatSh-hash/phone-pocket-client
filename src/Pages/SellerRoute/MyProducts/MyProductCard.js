import { Button } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";
import "aos/dist/aos.css";
import AOS from "aos";
const MyProductCard = ({ product, refetch }) => {
  AOS.init({ duration: 500 });
  const handleDelete = (product) => {
    console.log(product);
    fetch(`https://a-12-server.vercel.app/products/${product._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Succeeded Deletion!");
        refetch();
        console.log(data);
      });
  };

  const handleAdvertise = () => {
    console.log(product);
    fetch(`https://a-12-server.vercel.app/advertise`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Advertisement Successful!");
        console.log(data);
      });
  };

  return (
    <div
      data-aos="fade-left"
      className="shadow-lg shadow-gray-600 dark:bg-black w-1/2 mx-auto rounded-2xl my-10 p-5"
    >
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <div className="my-3 font-semibold">
        <p>Price : $ {product.APrice}</p>
        <p>Location : {product.location}</p>
      </div>
      <div className="flex justify-between my-2">
        <p className="font-semibold mb-2">
          Seller Name. : {product.sellerName}
        </p>
        <p className="font-semibold mb-2">Posted On. : {product.postDate}</p>
      </div>
      <div className="flex justify-between">
        <div className="w-1/5">
          <Button
            onClick={() => handleDelete(product)}
            gradientMonochrome="failure"
          >
            Delete
          </Button>
        </div>
        <div onClick={() => handleAdvertise(product)} className="w-1/5">
          <Button gradientMonochrome="success">Advertise</Button>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
