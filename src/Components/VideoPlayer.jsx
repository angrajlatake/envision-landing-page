import React from "react";

const VideoPlayer = ({ src }) => {
  return <video src={src} autoPlay muted loop className="resp-iframe"></video>;
};

export default VideoPlayer;
