import React from "react";
import { render } from "react-dom";
import Todo from "./Todo";
const App = () => {
  return (
    <div className="container mx-auto">
      <h1>#todo</h1>
      <Todo />
    </div>
  );
};

render(<App />, document.getElementById("root"));
