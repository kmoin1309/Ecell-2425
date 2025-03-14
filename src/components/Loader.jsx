import React from "react";
import "./Spinner.css";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Spinner */}
        <div className="spinner">
          {[...Array(10)].map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
