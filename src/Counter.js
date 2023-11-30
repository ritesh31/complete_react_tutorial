import React, { useState, useEffect } from "react";
import { useSignal, effect, signal } from "@preact/signals-react";

function Counter() {
  console.log("Inside Child");
  const [count, setCount] = useState(0);
  const useSignalCount = useSignal(0);
  const signalCount = signal(0);
  
  // effect(() => {
  //   console.log("Inside Counter signal Effect");
  // })

  return (
    <div style={styles.CounterComp}>
      <h3>Child Component</h3>
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          Using state
          <h4>Counter: {count}</h4>
          <button onClick={() => setCount(count + 1)}>Count ++</button>
        </div>
        <div style={styles.innerContainer}>
          Using useSignal
          <h4>Counter: {useSignalCount}</h4>
          <button onClick={() => useSignalCount.value++}>Count ++</button>
        </div>

        <div>
          Using signal()
          <h4>Counter: {signalCount}</h4>
          <button onClick={() => signalCount.value++}>Count ++</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  CounterComp: {
    border: "1px solid",
    padding: "30px",
    marginTop: "20px",
    backgroundColor: "lightblue",
  },
  container: {
    display: "flex",
  },
  innerContainer: {
    marginRight: "200px",
  },
};

export default Counter;
