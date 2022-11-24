import React from "react";
import { Vortex } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div>
      <Vortex
        height="80"
        width="80"
        color="blue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
