import React, { Suspense, lazy, useMemo, useRef, useState } from "react";
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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h4>This is root component</h4>
      <button onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
      {showModal && createPortal(<Modal />, document.body)}
    </>
  );
};

export default App;
