import { Button } from "flowbite-react";
import React from "react";

const MyProductCard = ({ product }) => {
  const handleDelete = (product) => {
    console.log(product);
    fetch(`http://localhost:1000/products/${product._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  };

  return (
    <div className="shadow-lg shadow-gray-600 dark:bg-black w-1/2 mx-auto rounded-2xl my-10 p-5">
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
        <div className="w-1/5">
          <Button gradientMonochrome="success">Advertise</Button>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
