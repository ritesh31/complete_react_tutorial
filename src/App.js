import React, { Suspense, lazy, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./reducers/counterSlice";
import Button from "./Button";
// import Text from "./Text";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Input from "./Input";
import Child from "./Child";
import PrintTable from "./PrintTable";
import ThemeContext from "./Context";
import Form from "./Form";
import { createPortal } from "react-dom";
import Modal from "./Modal";

const Text = lazy(() => delayForDemo(import("./Text")));

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const App = () => {
  const count = useSelector((state) => state.counter.counterValue);
  const dispatch = useDispatch();

  return (
    <>
      <strong>Counter: </strong>
      {count}
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>IncrementByAmount 5</button>
      </div>
    </>
  );
};

export default App;
