import { Button } from "flowbite-react";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { MdOutlineVerified } from "react-icons/md";

const SellerCard = ({ seller, refetch }) => {
  AOS.init({ duration: 500 });
  const handleDeleteSeller = (seller) => {
    console.log(seller);
    fetch(`http://localhost:1000/sellers/${seller?._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };
  const handleverifySeller = (seller) => {
    console.log(seller);
    fetch(`http://localhost:1000/sellers/verify/${seller._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    refetch();
  };

  return (
    <div
      data-aos="fade-left"
      className="w-3/5 shadow-2xl rounded-2xl mx-auto border-2 bg-gray-200 dark:bg-white dark:text-black border-black p-5 my-5 flex items-center justify-between"
    >
      <div className="flex justify-between w-3/5">
        <h3 className="flex h-10 items-center">
          {seller.name}
          <span className="text-blue-500 mx-3">
            {seller?.status === "verified" ? <MdOutlineVerified /> : null}
          </span>
        </h3>

        <p>{seller.email}</p>
      </div>
      <div className="flex">
        <div className="mx-2">
          {seller?.status !== "verified" ? (
            <Button
              onClick={() => handleverifySeller(seller)}
              gradientMonochrome="teal"
            >
              {<p>{seller?.status === "verified" ? "verified" : "Verify"}</p>}
            </Button>
          ) : null}
        </div>
        <div className="mx-2">
          <Button
            onClick={() => handleDeleteSeller(seller)}
            gradientMonochrome="failure"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
