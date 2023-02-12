import React from "react";
import { motion } from "framer-motion";
const ImagePlayer = ({ src }) => {
  //this is  git custom command test

  return (
    <motion.div
      className="img-player"
      style={{ backgroundImage: `url(${src})` }}
    ></motion.div>
  );
};

export default ImagePlayer;
