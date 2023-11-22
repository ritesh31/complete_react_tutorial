import React, { memo } from "react";

const Text = memo(({ children }) => {
  console.log(children);
  return <p>{children}</p>;
});

export default Text;
