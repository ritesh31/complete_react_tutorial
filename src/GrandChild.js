import React, { memo, useState } from "react";

const GrandChild = memo(({ parentClickEvent }) => {
  const [counter, setCounter] = useState(0);

  let startTime = performance.now();
  while (performance.now() - startTime < 800) {
    // Do nothing for 800ms to emulate extremely slow code
  }

  const handleButtonClick = () => {
    setCounter((prev) => prev + 1);
    parentClickEvent?.();
  };

  return (
    <>
      <h4>Grand child component (Super slow)</h4>
      <p>
        <span>Count : {counter}</span>
        <button onClick={handleButtonClick}>Count ++</button>
      </p>
    </>
  );
});

export default GrandChild;
