import React from "react";
import Lottie from "lottie-react";
import error from "../../Assets/error.json";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import "./Error.css";
const Error = () => {
  return (
    <div className="lg:flex lg:flex-row lg:w-4/5 sm:w-full my-10 sm:flex sm:flex-col justify-center items-center rounded-2xl shadow-2xl bg-gray-200 h-auto mx-auto dark:bg-black dark:text-white">
      <div className="lg:w-1/2 sm:w-full mx-auto">
        <Lottie animationData={error} loop={true} />
      </div>
      <div className="lg:w-1/2 sm:w-full ">
        <p
          style={{ fontFamily: "poppins" }}
          id="errorText"
          className="text-black text-3xl font-bold text-center dark:text-white"
        >
          Sorry! Something must've went Wrong! We'll make sure to check under
          the hoods!
        </p>

        <div className="mt-5 w-56 mx-auto">
          <Link to={"/home"}>
            <Button gradientDuoTone="purpleToPink" size="xl">
              <span className="font-bold"> Take Yourself Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
