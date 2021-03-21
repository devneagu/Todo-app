import React, { useState } from "react";
import TodoContainer from "./TodoContainer";
const todoComponent = () => {
  const [toggle, setToggle] = useState("All");
  const [storedTodo, setStoredTodo] = useState(
    localStorage.getItem("storedTodo") || "[]"
  );
  console.log(storedTodo);
  function addTodo() {
    if (typeof storedTodo == "string") {
      var dataTodo = JSON.parse(storedTodo);
    } else {
      var dataTodo = storedTodo;
    }
    console.log(dataTodo);
    let element = document.querySelector("#todoinput");
    if (element.value == "") return;

    dataTodo.push({
      text: element.value,
      createdAt: new Date().getTime(),
      completed: 0,
    });
    localStorage.setItem("storedTodo", JSON.stringify(dataTodo));
    setStoredTodo(dataTodo);
    element.value = "";
  }
  return (
    <div>
      <div className="flex mb-5">
        <div
          className={`flex-1 text-center todoCategory ${
            toggle == "All" ? "active" : ""
          }`}
          onClick={() => setToggle("All")}
        >
          <h3>All</h3>
        </div>
        <div
          className={`flex-1 text-center todoCategory ${
            toggle == "Active" ? "active" : ""
          }`}
          onClick={() => setToggle("Active")}
        >
          <h3>Active</h3>
        </div>
        <div
          className={`flex-1 text-center todoCategory ${
            toggle == "Completed" ? "active" : ""
          }`}
          onClick={() => setToggle("Completed")}
        >
          <h3>Completed</h3>
        </div>
      </div>
      <div className="text-center">
        <input id="todoinput" type="text" placeholder="add details"></input>
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoContainer dataTodo={storedTodo} />
    </div>
  );
};

export default todoComponent;
