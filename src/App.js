import React, { useState } from "react";
import Button from "./Button";
import Text from "./Text";

const App = () => {
  const [data, setData] = useState([
    { id: "01", text: "Text 1" },
    { id: "02", text: "Text 2" },
    { id: "03", text: "Text 3" },
    { id: "04", text: "Text 4" },
    { id: "05", text: "Text 5" },
  ]);

  const handleButtonclick = () => {
    console.log("First Button");
    setData([{ id: "06", text: "Text 6" }, ...data]);
  };

  return (
    <div>
      {data.map((ele) => (
        <Text key={ele.id}>{ele.text}</Text>
      ))}

      <Button buttonclick={handleButtonclick}>Button 1</Button>
    </div>
  );
};

export default App;
