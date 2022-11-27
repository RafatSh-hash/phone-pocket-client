import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import BookingModal from "./BookingModal/BookingModal";
import "aos/dist/aos.css";
import AOS from "aos";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  AOS.init({ duration: 500 });
  const { user } = useContext(AuthContext);
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };

  const {
    APrice,
    Battery,
    Condition,
    IPrice,
    Storage,
    location,
    name,
    postDate,
    sellerName,
    thumbnail,
  } = product;

  //   const handleBooking = (event) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const name = form.name.value;
  //     // const price = form.price.value;
  //     // const userName = form.userName.value;
  //     // const phone = form.phone.value;
  //     // const meetLocation = form.meetLocation.value;
  //     // console.log(name, price, userName, phone, meetLocation);
  //     console.log(name);
  //   };

  const handleAddToWishList = (product) => {
    const wish = {
      product: product.name,
      price: product.APrice,
      email: user?.email,
      condition: product.Condition,
    };
    fetch(`http://localhost:1000/wishlist`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(wish),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Added To Wishlist");
        console.log(data);
      });
  };

  return (
    <div
      data-aos="fade-right"
      className="mx-5 my-20 shadow-xl shadow-black rounded-lg w-[20rem] dark:bg-black"
    >
      <div className="rounded-lg">
        <div className="h-48 rounded-lg">
          <img
            className="w-full h-full rounded-t-lg"
            src={thumbnail}
            alt=""
          ></img>
        </div>
        <h3 className="mt-5 font-semibold text-center text-xl text-black dark:text-white">
          {name}
        </h3>
        <div className="my-5 text-center text-blue-700 dark:text-white">
          <p className="font-bold">Original Price :{IPrice}</p>
          <p className="font-bold">Asking Price : {APrice}</p>
          <p className="font-bold">Condition : {Condition}</p>
          <p className="font-bold">Location : {location}</p>
          <p className="font-bold">Seller : {sellerName}</p>
          <p className="font-bold">Post Date: {postDate}</p>
        </div>

        <div className="flex justify-evenly">
          <div className="w-full">
            <button
              onClick={clicked}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
              type="button"
            >
              Buy Now
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={() => handleAddToWishList(product)}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-b-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
              type="button"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {modalOn && (
        <BookingModal
          user={user}
          product={product}
          setModalOn={setModalOn}
          setChoice={setChoice}
        />
      )}
    </div>
  );
};

export default ProductCard;
