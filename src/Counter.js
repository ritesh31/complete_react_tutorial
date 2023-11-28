import React, { useState, useEffect } from "react";
import { useSignal, effect } from "@preact/signals-react";

function Counter() {
  console.log("Inside Child");
  const [count, setCount] = useState(0);
  const signalCount = useSignal(0);

  // effect(() => {
  //   console.log("Inside Counter signal Effect");  
  // })

  return (
    <div style={styles.CounterComp}>
      <h3>Child Component</h3>
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
  containerOne: {
    marginRight: "200px",
  },
};

export default Counter;
