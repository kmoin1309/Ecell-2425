import React from "react";
import { UserDefault } from "../assets";

const UserCard = ({ candidate }) => {
  const cardStyle = {
    backgroundColor: "rgba(18, 17, 19, 0.9)",
    transition: "all 0.3s",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  if (candidate.hovercolor) {
    cardStyle[":hover"] = {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.5)",
      borderColor: "rgba(255, 255, 255, 0.2)",
    };
  }

  return (
    <div
      className="w-64 px-8 py-6 rounded-xl overflow-hidden m-4"
      style={cardStyle}
    >
      {/* User Image */}
      <div className="w-full flex items-center justify-center mb-4">
        <img
          src={candidate.img ? candidate.img : UserDefault}
          alt={candidate.name}
          className="w-28 h-28 rounded-full object-cover border-2 border-purple-500/30"
        />
      </div>

      {/* User Name */}
      <div className="pb-3">
        <p className="text-center text-white text-xl font-semibold">
          {candidate.name}
        </p>
        <p className="text-center text-sm text-stone-400">
          {candidate.position}
        </p>
      </div>

      {/* Social Media Buttons */}
      <div className="flex justify-center gap-5">
        {/* LinkedIn icon */}
        {candidate.linkedin && (
          <a
            href={candidate.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <img
              src="imported-svgs/linkedin.svg" // Replace with the actual LinkedIn icon image URL
              alt="LinkedIn"
              className="w-6 h-6 "
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
            className="mr-2"
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
  );
};

export default UserCard;
