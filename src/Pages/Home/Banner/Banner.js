import { Carousel } from "flowbite-react";
import React from "react";
import b1 from "../../../Assets/b1.jpg";
import b2 from "../../../Assets/b2.jpg";
import b3 from "../../../Assets/b3.jpg";
import b4 from "../../../Assets/b4.PNG";
import b5 from "../../../Assets/b5.PNG";
import b6 from "../../../Assets/b6.jpg";

const Banner = () => {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={b1} alt="..." />
        <img src={b2} alt="..." />
        <img src={b3} alt="..." />
      </Carousel>
      <Carousel indicators={false}>
        <img src={b4} alt="..." />
        <img src={b5} alt="..." />
        <img src={b6} alt="..." />
      </Carousel>
    </div>
  );
};

export default Banner;
