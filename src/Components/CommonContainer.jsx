import { useState, useContext } from "react";
import cn from "classnames";
import { CursorContext } from "../CustomCursor/CursorManager";
import { motion } from "framer-motion";
const CommonContainer = (props) => {
  const [first] = props.mediaData;
  const [activeMedia, setActiveMedia] = useState(first);
  const { setSize } = useContext(CursorContext);
  const listVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const listTransition = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -50 },
  };

  return (
    <>
      <motion.div
        className={`navigation ${props.position}`}
        whileHover={() => props.setMenu(true)}
      >
        <h2>{props.name}</h2>
        <motion.ul
          variants={listVariants}
          initial="closed"
          animate={props.menu ? "open" : "closed"}
          whileHover="open"
        >
          {props.mediaData.map((media, index) => (
            <motion.li
              variants={listTransition}
              key={index}
              className={cn({ active: media.image === activeMedia.image })}
              onMouseEnter={() => {
                setSize("regular");
                setActiveMedia(media);
              }}
              onMouseLeave={() => {
                setSize("small");
              }}
            >
              {media.name}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      {props.render(activeMedia)}
    </>
  );
};

export default CommonContainer;
