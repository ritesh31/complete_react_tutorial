import React, { useState } from "react";

const withCounter = (OriginalComponent) => {
  const NewComponent = () => {
    // Perform some logic on original component
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };
    return (
      <div>
        <OriginalComponent increment={incrementCount } count={count} />
      </div>
    );
  };
  return NewComponent;
};

export default withCounter;