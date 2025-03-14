import React from "react";
import { UserDefault } from "../assets";

const NonCoreUserCard = ({ candidate }) => {
  const cardStyle = {
    backgroundColor: "rgba(18, 17, 19, 0.9)",
    transition: "all 0.3s",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  if (candidate.hovercolor) {
    cardStyle[":hover"] = {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.5)",
      borderColor: "rgba(255, 255, 255, 0.2)",
    };
  }

  return (
    <div
      className="w-80 h-[160px] rounded-xl overflow-hidden m-4 p-4 flex"
      style={cardStyle}
    >
      {/* User Image */}
      <div className="w-2/5 flex justify-center items-center pr-4">
        <img
          src={candidate.img ? candidate.img : UserDefault}
          alt={candidate.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-purple-500/30"
        />
      </div>

      {/* User Details */}
      <div className="w-3/5 p-2 flex flex-col justify-between">
        {/* User Name */}
        <div>
          <p className="text-md text-white font-semibold truncate hover:text-clip">
            {candidate.name}
          </p>
          <p className="text-sm text-white">{candidate.position}</p>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-start gap-2">
          {/* LinkedIn icon */}
          {candidate.linkedin && (
            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="imported-svgs/linkedin.svg" // Replace with the actual LinkedIn icon image URL
                alt="LinkedIn"
                className="w-6 h-6"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
          )}

          {/* GitHub icon */}
          {candidate.github && (
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="imported-svgs/github.svg" // Replace with the actual GitHub icon image URL
                alt="GitHub"
                className="w-6 h-6"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
          )}

          {/* Instagram icon */}
          {candidate.instagram && (
            <a
              href={candidate.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="imported-svgs/instagram.svg" // Replace with the actual Instagram icon image URL
                alt="Instagram"
                className="w-6 h-6"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NonCoreUserCard;
