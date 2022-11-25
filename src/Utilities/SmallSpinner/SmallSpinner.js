import React from "react";
import { Bars } from "react-loader-spinner";

const SmallSpinner = () => {
  return (
    <div className="w-[80px] h-[80px] mx-auto">
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
