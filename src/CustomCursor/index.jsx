import { useContext, useRef, useEffect } from "react";
import { CursorContext } from "./CursorManager";
import "./style.scss";

const CustomCursor = () => {
  const secondaryCursor = useRef(null);
  const { size } = useContext(CursorContext);
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      secondaryCursor.current.style.transform = `translate3d(${
        mouseX - secondaryCursor.current.clientWidth / 2
      }px, ${mouseY - secondaryCursor.current.clientWidth / 2}px, 0)`;
    });

    return () => {};
  }, []);

  return (
    <div className={`secondary-cursor ${size}`} ref={secondaryCursor}></div>
  );
};

export default CustomCursor;
