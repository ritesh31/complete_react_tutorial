import React from "react";
import Button from "./Button";

function App() {
  const handleFirstButtonclick = () => {
    console.log("First Button");
  };

  const handleSecondButtonclick = () => {
    console.log("Second Button");
  };

  return (
    <div>
      <Button buttonclick={handleFirstButtonclick}>Button 1</Button>
      <Button buttonclick={handleSecondButtonclick}>Button 2</Button>
    </div>
  );
}

export default App;
