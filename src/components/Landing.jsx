import React from "react";
import { TypeAnimation } from "react-type-animation";
import backgroundEcell from "../assets/backgroundEcell.mp4";

const Landing = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source
          src={backgroundEcell}
          type="video/mp4"
        />
      </video>
      <div className="text-center items-center flex flex-col max-w-4xl mx-auto">
        <div className="text-stone-300 font-medium font-Sansserif text-xl md:text-2xl tracking-wider mb-8 md:mb-16">
          IDEATE.INNOVATE.INCUBATE
        </div>
        <div className="h-fit text-zinc-300 font-semibold font-Sansserif tracking-wider text-3xl md:text-4xl mb-16 md:mb-28">
          <TypeAnimation
            className="md:text-xl"
            sequence={["Entrepreneurship Cell", 1000]}
            speed={30}
            style={{ fontSize: "1.5em" }}
            repeat={Infinity}
          />
          <div className="pt-4 md:pt-8">Terna Engineering College</div>
        </div>
        <div className="text-gray-200 text-center text-lg md:text-2xl font-normal font-Sansserif">
          At Terna Ecell, we are a dynamic and passionate team dedicated to
          fostering a culture of innovation, entrepreneurship, and growth.
        </div>
      </div>
    </div>
  );
};

export default Landing;
