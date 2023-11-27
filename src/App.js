import React from "react";
import ClickCounter from "./ClickCounter";
import MouseHoverCounter from "./MouseHoverCounter";

const App = () => {
  return (
    <>
      <h3>Home Component</h3>
      <div>
        <ClickCounter />
        <MouseHoverCounter />
      </div>
    </>
  );
};

export default App;
