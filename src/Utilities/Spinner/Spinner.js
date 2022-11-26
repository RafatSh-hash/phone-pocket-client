import React from "react";
import { Vortex } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-[80px] h-[80px] mx-auto">
      <Vortex
        height="80"
        width="80"
        color="blue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperclassName="vortex-wrapper"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
