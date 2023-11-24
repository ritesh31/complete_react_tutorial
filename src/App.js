import React, { Suspense, lazy, useMemo, useRef, useState } from "react";
import Button from "./Button";
// import Text from "./Text";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Input from "./Input";
import Child from "./Child";
import PrintTable from "./PrintTable";

const Text = lazy(() => delayForDemo(import("./Text")));
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && (
        <Suspense fallback={<div>Loading...</div>}>
          <Text>This is Lazy loading</Text>
        </Suspense>
      )}
    </>
  );
};

export default App;
