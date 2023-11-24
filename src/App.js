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

const Text = lazy(() => delayForDemo(import("./Text")));

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <p>Theme: {theme}</p>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Change Theme
      </button>
      <Form theme={theme} />
    </ThemeContext.Provider>
  );
};

export default App;
