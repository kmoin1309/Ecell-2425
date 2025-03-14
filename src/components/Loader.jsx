import React from "react";
import logo from "../assets/Navbar/logo.png";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Logo Container */}
        <div className="w-40 h-40 flex items-center justify-center">
          <img
            src={logo}
            alt="Ecell Logo"
            className="w-32 h-32 object-contain z-10"
          />
        </div>

        {/* Loading Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44">
          <div className="absolute inset-0 border-4 border-[#00ff88]/20 rounded-full"></div>
          <div
            className="absolute inset-0 border-4 border-[#00ff88] rounded-full animate-spin"
            style={{
              clipPath:
                "polygon(50% 0%, 50% 25%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
