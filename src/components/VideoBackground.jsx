import React from "react";
import backgroundEcell from "../assets/backgroundEcell.mp4";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <source
          src={backgroundEcell}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;
