import React, { useState, useEffect, useLayoutEffect } from "react";

function Timer() {
  const [counter, setCounter] = useState(0);

  // useEffect dependecny array
  // null => execute every re-render
  // empty => execute only once(onmount)
  // with variables => execute when state & props variables change

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Inside interval");
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      console.log("useEffect 1 unmount");
      clearInterval(interval);
    };
  }, []);

  // For unmount
  // If there are more than one useEffect with own unmount functions then all unmount functions executed when component unmount
  useEffect(() => {
    return () => {
      console.log("useEffect 2 unmount");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("running useLayoutEffect");
  }, []);

  return <div>Timer: {counter}</div>;
}

export default Timer;
