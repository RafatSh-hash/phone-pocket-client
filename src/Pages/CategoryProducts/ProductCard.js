import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import BookingModal from "./BookingModal/BookingModal";

const ProductCard = ({ product }) => {
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

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    // const price = form.price.value;
    // const userName = form.userName.value;
    // const phone = form.phone.value;
    // const meetLocation = form.meetLocation.value;
    // console.log(name, price, userName, phone, meetLocation);
    console.log(name);
  };

  return (
    <div className="mx-5 my-10 shadow-xl shadow-black rounded-lg w-[20rem] dark:bg-black">
      <div className="rounded-lg">
        <div className="h-48 rounded-lg">
          <img
            className="w-full h-full rounded-t-lg"
            src={thumbnail}
            alt=""
          ></img>
        </div>
        <h3 className="mt-5 font-semibold text-center text-lg text-black dark:text-white">
          {name}
        </h3>
        <div className="my-5 text-center text-blue-700 dark:text-white">
          <p>Original Price :{IPrice}</p>
          <p>Asking Price : {APrice}</p>
          <p>Condition : {Condition}</p>
          <p>Location : {location}</p>
          <p>Seller : {sellerName}</p>
          <p>Post : {postDate}</p>
        </div>

        <button
          onClick={clicked}
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
          type="button"
        >
          Buy Now
        </button>
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
