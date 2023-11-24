import React, { memo } from "react";

const generateTable = (num) => {
  let arr = [];
  let startTime = performance.now();
  while (performance.now() - startTime < 800) {
    // Do nothing for 800ms to emulate extremely slow code
  }

  for (let i = 0; i < 10; i++) {
    arr.push(<div>{num * i}</div>);
  }
  return arr;
};

// memo will work with
// 1. state object => work
// 2. local object, array(non-primitive) => not work
// 3. local primitive variables(number, string) => work
// memo uses shallow comparision that's why it don't use local object & array as props
const PrintTable = memo(({ num, stateObj, localObj, temp }) => {
  let table = generateTable(num);

  return (
    <div>
      <p>Table</p>
      <div>{table}</div>
      <p>State non-primitive: {stateObj.name}</p>
      <p>Local non-primitive: {localObj.name}</p>
      <p>Local primitive: {temp}</p>
    </div>
  );
});

export default PrintTable;
