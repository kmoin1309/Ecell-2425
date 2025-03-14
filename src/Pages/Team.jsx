import React, { useState } from "react";
import TeamsPills from "../components/TeamsPills";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState("2023-24");

  return (
    <>
      <div className="font-Onest flex justify-center min-h-screen">
        <div className="max-w-7xl my-10 flex justify-center items-center py-10 px-4">
          <div className="lg:mt-0 w-full">
            <h1 className="my-8 text-center text-3xl font-semibold text-white md:text-5xl">
              Meet the team
            </h1>
            <h3 className="my-6 text-center text-purple-200 text-sm md:text-lg">
              Meet the team planning, innovating and executing various tasks of
              this community!
            </h3>
            <div className="flex flex-col text-purple-200 text-xs items-center gap-2 mb-12">
              <label className="text-white/80 text-sm">
              </label>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none px-8 py-3 rounded-xl bg-[#121113]/80 text-white border-2 border-purple-500/20 
                    focus:outline-none focus:border-purple-500/50 hover:border-purple-500/30 transition-all duration-300
                    backdrop-blur-sm pr-12 text-lg font-medium cursor-pointer shadow-lg"
                >
                  <option value="2023-24">2023-24</option>
                  <option value="2024-25">2024-25</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-purple-500/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <TeamsPills selectedYear={selectedYear} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
