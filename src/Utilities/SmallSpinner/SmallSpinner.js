import React from "react";
import { Bars } from "react-loader-spinner";

const SmallSpinner = () => {
  return (
    <div className="w-[20px] h-[20px] mx-auto">
      <Bars
        height="20"
        width="20"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default SmallSpinner;
