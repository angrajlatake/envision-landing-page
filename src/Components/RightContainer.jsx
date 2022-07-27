import CommonContainer from "./CommonContainer";
import VideoPlayer from "./VideoPlayer";
import { videoData } from "../Data";
import { motion, AnimatePresence } from "framer-motion";
const RightContainer = ({ menu, setMenu }) => {
  return (
    <CommonContainer
      mediaData={videoData}
      position="right"
      name="Film"
      menu={menu}
      setMenu={setMenu}
      render={(media) => (
        <AnimatePresence>
          <motion.div
            className="container container-right"
            key={media.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <VideoPlayer src={media.image} />
            <h1 className="container-big-title">{media.name}</h1>
          </motion.div>
        </AnimatePresence>
      )}
    />
  );
};

export default RightContainer;
