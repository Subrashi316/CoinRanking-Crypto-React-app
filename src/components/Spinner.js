import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="spinner-box">
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Spinner;
