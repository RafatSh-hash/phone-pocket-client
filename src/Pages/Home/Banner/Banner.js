import { Carousel } from "flowbite-react";
import React from "react";
import b1 from "../../../Assets/b1.jpg";
import b2 from "../../../Assets/b2.jpg";
import b3 from "../../../Assets/b3.jpg";

const Banner = () => {
  return (
    <div className="h-[600px] sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img className="h-full" src={b1} alt="..." />
        <img className="h-full" src={b2} alt="..." />
        <img className="h-full" src={b3} alt="..." />
      </Carousel>
    </div>
  );
};

export default Banner;
