import React, { useRef, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Input from "./Input";
import Child from "./Child";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h4>Outer component</h4>
      <p>
        <span>Count : {counter}</span>
        <button onClick={() => setCounter((prev) => prev + 1)}>Count ++</button>
      </p>
      <Child />
    </>
  );
};

export default App;
