import CommonContainer from "./CommonContainer";
import ImagePlayer from "./ImagePlayer";
import { imagesData } from "../Data";
import { motion, AnimatePresence } from "framer-motion";
const LeftContainer = ({ menu, setMenu }) => {
  return (
    <CommonContainer
      mediaData={imagesData}
      position="left"
      name="Photo"
      menu={menu}
      setMenu={setMenu}
      render={(media) => (
        <AnimatePresence>
          <motion.div
            key={media.image}
            className="container container-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <ImagePlayer src={media.image} />
            <h1 className="container-big-title">{media.name}</h1>
          </motion.div>
        </AnimatePresence>
      )}
    />
  );
};

export default LeftContainer;
