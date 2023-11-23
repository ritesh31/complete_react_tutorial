import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

function Timer() {
  const [counter, setCounter] = useState(0);
  const interval = useRef();

  // useEffect dependecny array
  // null => execute every re-render
  // empty => execute only once(onmount)
  // with variables => execute when state & props variables change

  useEffect(() => {
    interval.current = setInterval(() => {
      console.log("Inside interval");
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      console.log("useEffect 1 unmount");
    };
  }, []);

  // For unmount
  // If there are more than one useEffect with own unmount functions then all unmount functions executed when component unmount
  useEffect(() => {
    return () => {
      console.log("useEffect 2 unmount");
    };
  }, []);

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  return (
    <>
      <div>Timer: {counter}</div>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}

export default Timer;
