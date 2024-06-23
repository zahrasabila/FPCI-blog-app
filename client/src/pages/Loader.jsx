import React from "react";
import LoadingGIF from "../assets/loading.gif";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__img">
        <img src={LoadingGIF} alt="" />
      </div>
    </div>
  );
};

export default Loader;
