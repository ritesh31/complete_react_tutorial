import React, { useRef, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Input from "./Input";
import Child from "./Child";
import PrintTable from "./PrintTable";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <>
      <h4>Outer component</h4>
      <p>
        <span>Count 1 : {counter1}</span>
        <button onClick={() => setCounter1((prev) => prev + 1)}>
          Count ++
        </button>
      </p>
      <p>
        <span>Count 2 : {counter2}</span>
        <button onClick={() => setCounter2((prev) => prev + 1)}>
          Count ++
        </button>
      </p>

      <PrintTable num={counter1} />
    </>
  );
};

export default App;
