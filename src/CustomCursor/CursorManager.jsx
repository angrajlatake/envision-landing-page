import { createContext, useState } from "react";

export const CursorContext = createContext({
  size: "small",
  setSize: () => {},
});

const CursorManager = (props) => {
  const [size, setSize] = useState("small");
  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorManager;
