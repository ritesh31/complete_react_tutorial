// const child1 = React.createElement("p", {}, "This is Child 1");
// const child2 = React.createElement("p", {}, "This is Child 2");

// const div = React.createElement("div", {}, "This is Ritesh. Using ReactJS", [
//   child1,
//   child2,
// ]);

// const div= <div>Hello</div>

// JSX converted into React element using babel
// Ex. <div>Sample<div>  ->  const div = React.createElement("div", {}, "Sample");
import React from 'react';
import { createRoot } from 'react-dom/client';
import "./styles.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
