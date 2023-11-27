import React, { useState } from "react";
import withCounter from "./withCounter";

function MouseHoverCounter({ count, increment }) {
  return (
    <div>
      <h4>Mouse Hover Counter: {count}</h4>
      <button onMouseOver={increment}>Count ++</button>
    </div>
  );
}

export default withCounter(MouseHoverCounter);
