import React, { useMemo } from "react";

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

const PrintTable = ({ num }) => {
  let table = useMemo(() => generateTable(num), [num]);

  return (
    <div>
      <p>Table</p>
      {table}
    </div>
  );
};

export default PrintTable;
