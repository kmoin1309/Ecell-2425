import React from "react";
import CounterAnimation from "../components/Counter";
import about1 from "../assets/about1.png";
const About = () => {
  return (
    <>
      <div className=" min-h-screen w-[100%] flex flex-col justify-center items-center overflow-hidden ">
        <div className="flex h-44 w-full justify-center items-center bg-[url('/about.jpg')] bg-bottom mt-5">
          <h1 className="text-white text-2xl font-sans font-semibold pt-4 mt-5">
            About Us
          </h1>
        </div>

        <HowStarted />
        <AboutWork />
        <Goals />
      </div>
    </>
  );
};

const HowStarted = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 w-full min-h-[615px] md:flex-row md:gap-20 ">
        {about1}

        <div className="w-[395px] h-[280px] md:h-[345px] md:w-[480px]">
          <div className="relative w-full h-full">
            <img
              className="absolute h-56 md:h-72"
              src="/about1.jpg"
              alt=""
              // srcset=""
            />
            <img
              className="absolute h-56 md:h-72 top-14 left-24"
              src="/about2.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>

        {/* Content */}
        <div className="h-[200px] w-[456px] md:w-[600px]  flex flex-col justify-center items-center gap-2 md:gap-4 ">
          <div>
            <h3 className="text-2xl md:text-5xl font-semibold text-white">
              How E-cell Terna started?
            </h3>
            <p className="text-white text-[14px] md:text-lg md:text-center w-[80%] md:w-full">
              The inception of the E-Cell at Terna Engineering College arose
              from a collective vision to cultivate a platform that nurtures
              entrepreneurial skills and innovation among its students.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const AboutWork = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center p-8 md:px-60 md:gap-6 gap-4 ">
        <h3 className="text-2xl md:text-5xl font-semibold text-white text-center">
          About Our Work
        </h3>
        <p className="text-white text-[14px] md:text-lg text-center">
          Up to the present moment, our Engineering E-Cell has orchestrated a
          total of 10 impactful events, established collaborative partnerships
          with 17 innovative startups, and gathered a thriving community of over
          350 members within our department, fostering an environment ripe for
          innovation and entrepreneurial endeavors.
        </p>

        <div className="w-[450px] h-[200px] md:w-[700px] md:h-[300px] flex justify-center items-center">
          <div className=" w-36 h-32 md:w-52 md:h-48 py-6 flex flex-col justify-center items-center gap-1">
            <h1 className="text-5xl md:text-6xl text-white">
              <CounterAnimation targetValue={25} />
            </h1>
            <p className="text-white font-base text-lg">Events</p>
          </div>
          <div className=" w-36 h-32 md:w-52 md:h-48 py-6 flex flex-col justify-center items-center gap-1 border-x-2 border-slate-500">
            <h1 className="text-5xl md:text-6xl text-white">
              <CounterAnimation targetValue={19} />
            </h1>
            <p className="text-white font-base text-lg">Startups</p>
          </div>
          <div className=" w-36 h-32 md:w-52 md:h-48 py-6 flex flex-col justify-center items-center gap-1">
            <h1 className="text-5xl md:text-6xl text-white">
              <CounterAnimation targetValue={255} />+
            </h1>
            <p className="text-white font-base text-lg">Members</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Goals = () => {
  return (
    <>
      <div className="w-full px-4 md:px-20 py-16">
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Content Section */}
          <div className="w-1/2 pr-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Our Goal
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Our vision for the Engineering E-Cell is to serve as a dynamic
              hub, empowering and nurturing aspiring entrepreneurs by providing
              them with the necessary resources, mentorship, and opportunities,
              fostering a culture of innovation and sustainable growth within
              our academic community.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-1/2">
            <img
              className="w-full h-[350px] object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              src="/about.jpg"
              alt="Our Goals"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
