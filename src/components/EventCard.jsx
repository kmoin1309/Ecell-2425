import React from "react";
import { SlCalender } from "react-icons/sl";

function EventCard({ title, content, eventyear, imgUrl }) {
  return (
    <div className="flex flex-row justify-center font-sans my-8">
      <div className="flex flex-col md:flex-row md:w-[80%] w-[100%] bg-black/20 backdrop-blur-sm p-6 rounded-xl hover:bg-black/30 transition-all duration-300 border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl">
        {/* left container */}
        <div className="relative w-full md:w-[400px] min-h-[300px] overflow-hidden rounded-lg">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-contain rounded-md bg-black/20"
          />
        </div>

        {/* right container */}
        <div className="md:static md:ml-8 mt-6 md:mt-0 md:w-[60%] text-white">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold tracking-tight hover:text-blue-400 cursor-pointer transition-colors">
              {title}
            </h1>
            <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1 rounded-full">
              <SlCalender className="text-blue-400" />
              <span className="text-sm">{eventyear}</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{content}</p>

          {/* tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-orange-700 py-2 px-4 rounded-full text-sm">
              Startup
            </span>
            <span className="bg-blue-700 py-2 px-4 rounded-full text-sm">
              Technical
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
