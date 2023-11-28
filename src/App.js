import React, { useEffect, useState } from "react";
import { useSignal, effect } from "@preact/signals-react";
import Counter from "./Counter";

const App = () => {
  // Number
  const [count, setCount] = useState(0);
  const signalCount = useSignal(0);

  // Object
  const signalObject = useSignal({
    name: "Ritesh",
    city: "Pune",
    mob: "12345",
  });

  useEffect(() => {
    console.log("Inside Parent");
  });

  // effect(() => {
  //   console.log("Inside signal Effect");
  // });

  return (
    <div style={styles.homeComp}>
      <h3>Home Component</h3>
      <div style={styles.container}>
        <div style={styles.containerOne}>
          Using state
          <h4>Counter: {count}</h4>
          <button onClick={() => setCount(count + 1)}>Count ++</button>
        </div>
        <div>
          Using signal
          <h4>Counter: {signalCount}</h4>
          <button onClick={() => signalCount.value++}>Count ++</button>
        </div>
      </div>

      <Counter />
    </div>
  );
};

const styles = {
  homeComp: {
    border: "1px solid",
    padding: "30px",
    backgroundColor: "lightgray",
  },
  container: {
    display: "flex",
  },
  containerOne: {
    marginRight: "200px",
  },
};

export default App;
