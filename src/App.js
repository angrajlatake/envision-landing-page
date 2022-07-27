import "./App.scss";
import { useState } from "react";
import CustomCursor from "./CustomCursor";
import CursorManager from "./CustomCursor/CursorManager";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";
function App() {
  const [leftMenu, setLeftMenu] = useState(false);
  const [rightMenu, setRightMenu] = useState(false);
  return (
    <CursorManager>
      <div className="App">
        <CustomCursor />
        <div
          className="hover-left"
          onMouseEnter={() => setLeftMenu(true)}
          onMouseLeave={() => setLeftMenu(false)}
        ></div>
        <div
          className="hover-right"
          onMouseEnter={() => setRightMenu(true)}
          onMouseLeave={() => setRightMenu(false)}
        ></div>
        <LeftContainer menu={leftMenu} setMenu={setLeftMenu} />
        <RightContainer menu={rightMenu} setMenu={setRightMenu} />
        <h1 className="center-text">Envision</h1>
      </div>
    </CursorManager>
  );
}

export default App;
