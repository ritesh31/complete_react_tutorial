import React, { useState } from "react";
import withCounter from "./withCounter";

function ClickCounter({ count, increment }) {
  return (
    <div>
      <h4>Click Counter: {count}</h4>
      <button onClick={increment}>Count ++</button>
    </div>
  );
}

export default withCounter(ClickCounter);
