// import React from "react";
// import landing from "../assets/landing.png";
// import { TypeAnimation } from "react-type-animation";
// import backgroundEcell from "../assets/backgroundEcell.mp4";

// function Landing() {
//   return (
//     <div className="relative py-28 bg-gradient-to-r w-[100%] h-[100%] flex flex-col justify-center items-center md:mx-8 box-border md:flex-row-reverse overflow-hidden">
//       {/* <video
//         className="top-0 left-0 w-[100%] h-auto object-cover pointer-events-none -z-10"
//         src={backgroundEcell}
//         playing={true}
//         loop={true}
//         controls={false}
//         muted={true}
//         width="130rem"
//         height="130rem"
//       /> */}
//       <div className="flex flex-col-reverse lg:flex-row justify-between items-center md-flex-row">
//         {/* Left Part */}
//         <div className="space-y-9 px-16 my-12 ">
//           <div className="text-stone-300 text-[17px] p-2 font-medium font-Sansseriftext-stone-300 text-[17px] p-2 font-medium font-Sansserif ">
//             {/* IDEATE . INNOVATE . INCUBATE */}
{
  /* <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    "IDEATE.",
    1000,
    "INNOVATE.",
    1000,
    "INCUBATE.",
    1000,
  ]}
  speed={50}
  style={{ fontSize: "2em" }}
  repeat={Infinity}
/> */
}
//           </div>
//           <div className="h-fit text-zinc-300 font-semibold font-Sansserif text-4xl">
//             Entrepreneurship
//             <br />
//             Cell Terna <br />
//             Engineering college
//             <br />
//           </div>
//           <div className=" text-gray-200 py-4 text-xl font-normal font-Sansserif">
//             At Terna Ecell, we are a dynamic and passionate team dedicated to
//             fostering a culture of innovation, entrepreneurship, and growth.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landing;

import React from "react";
import backgroundEcell from "../assets/backgroundEcell.mp4";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden flex flex-col justify-center items-center box-border md:flex-row-reverse">
      <video
        autoPlay
        className="w-full h-screen object-cover pointer-events-none -z-10 overflow-x-hidden absolute"
        src={backgroundEcell}
        type="video/mp4"
        loop={true}
        controls={false}
        muted={true}
        width="130rem"
        height="130rem"
      />
      <div className="absolute text-white text-center items-center flex flex-col">
        <div className="text-stone-300 font-medium font-Sansserif text-2xl tracking-wider mb-16">
          IDEATE.INNOVATE.INCUBATE
        </div>
        <div className="h-fit text-zinc-300 font-semibold font-Sansserif tracking-wider text-4xl mb-28">
          {/* Entrepreneurship <br /> Cell Terna Engineering <br /> College */}
          <TypeAnimation
            className="md:text-xl"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Entrepreneurship Cell",
              1000,
            ]}
            speed={30}
            style={{ fontSize: "1.5em" }}
            repeat={Infinity}
          />
          <br />
          <div className="pt-8">Terna Engineering College</div>
        </div>
        <div className="text-gray-200 text-center text-2xl font-normal font-Sansserif">
          At Terna Ecell, we are a dynamic and passionate <br /> team dedicated
          to fostering a culture of innovation, <br />
          entrepreneurship, and growth.
        </div>
      </div>
    </div>
  );
};

export default Landing;
