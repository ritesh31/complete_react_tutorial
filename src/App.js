import React, { useRef, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Input from "./Input";

const App = () => {
  let localVal = 0;
  const ref = useRef(0);
  const [stateVal, setStateVal] = useState(0);

  const inputRef = useRef(null);
  const extInputRef = useRef(null);

  return (
    <>
      <div>
        <button
          onClick={() => {
            localVal += 1;
          }}
        >
          Change Local
        </button>
        <button
          onClick={() => {
            ref.current += 1;
          }}
        >
          Change Ref
        </button>
        <button
          onClick={() => {
            setStateVal((prevCount) => prevCount + 1);
          }}
        >
          Change State
        </button>
      </div>
      <div>
        {localVal}
        {ref.current}
        {stateVal}
      </div>

      <h4>Timer Example</h4>
      <Timer />

      <h4>DOM Example</h4>
      <p>Using ref</p>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        Focus Input
      </button>

      <p>Using forwardRef</p>
      <Input ref={extInputRef} />
      <button
        onClick={() => {
          if (extInputRef.current) extInputRef.current.focus();
        }}
      >
        Focus Input
      </button>
    </>
  );
};

export default App;
