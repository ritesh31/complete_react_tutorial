import React, { useCallback, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";

const App = () => {
  const [timerToggle, setTimerToggle] = useState(true);
  const handleTimerToggle = () => {
    setTimerToggle(!timerToggle);
  };

  return (
    <>
      <div>{timerToggle && <Timer />}</div>
      <Button buttonclick={handleTimerToggle}>Click</Button>
    </>
  );
};

export default App;
