import React, { useCallback, useState } from "react";
import Button from "./Button";
import Text from "./Text";

const App = () => {
  const [message, updateMessage] = useState("Hello, This is Morning");

  // To avoid re-rendering child component(Button) on state change 
  // we can use useCallback hook for function & memo for child component
  
  const handleButtonclick = useCallback(() => {
    updateMessage("Hello, This is Afternoon");
  }, []);

  return (
    <div>
      <div>{message}</div>
      <Button buttonclick={handleButtonclick}>Button</Button>
    </div>
  );
};

export default App;
