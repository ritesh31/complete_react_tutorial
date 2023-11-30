import React, { useEffect, useState } from "react";
import { useSignal, effect, signal } from "@preact/signals-react";
import Counter from "./Counter";

const App = () => {
  // Number
  const [count, setCount] = useState(0);
  const useSignalCount = useSignal(0);
  const signalCount = signal(0);

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
        <div style={styles.innerContainer}>
          Using state
          <h4>Counter: {count}</h4>
          <button onClick={() => setCount(count + 1)}>Count ++</button>
        </div>

        <div style={styles.innerContainer}>
          Using useSignal()
          <h4>Counter: {useSignalCount}</h4>
          <button onClick={() => useSignalCount.value++}>Count ++</button>
        </div>

        <div>
          Using signal()
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
  innerContainer: {
    marginRight: "200px",
  },
};

export default App;
