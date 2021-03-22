import React, { useState, useEffect } from "react";
import TodoContainer from "./TodoContainer";
import TodoForm from "./TodoForm";
import TodoElement from "./TodoElement";

const todoComponent = () => {
  const [storedTodo, setStoredTodo] = useState(
    JSON.parse(localStorage.getItem("storedTodo")) || []
  );

  const [dataFiltered, setDataFiltered] = useState(storedTodo);
  const [toggle, setToggle] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);

  function addTodo(text) {
    const dataTodo = [
      ...storedTodo,
      {
        text: text,
        createdAt: new Date().getTime(),
        completed: false,
      },
    ];
    localStorage.setItem("storedTodo", JSON.stringify(dataTodo));
    setStoredTodo(dataTodo);
    setDataFiltered(dataTodo);
  }

  function updateElement(itemIndex, item) {
    const editedTaskList = storedTodo.map((task, index) => {
      if (index === itemIndex) {
        return { ...task, text: item.text };
      }
      return task;
    });
    localStorage.setItem("storedTodo", JSON.stringify(editedTaskList));
    setStoredTodo(editedTaskList);
  }
  function checkedElement(itemIndex, item) {
    const editedTaskList = storedTodo.map((task, index) => {
      if (index === itemIndex) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    localStorage.setItem("storedTodo", JSON.stringify(editedTaskList));
    setStoredTodo(editedTaskList);
  }

  function mapFunction(item, index) {
    return (
      <TodoElement
        key={index}
        item={item}
        index={index}
        checkedElement={checkedElement}
        updateElement={updateElement}
      />
    );
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
      <TodoForm addTodo={addTodo} />
      <div id="list">
        {storedTodo.length === 0 ? (
          <h1>You're all done here</h1>
        ) : (
          storedTodo
            .filter(FILTER_MAP[toggle])
            .map((item, index) => mapFunction(item, index))
        )}
      </div>
    </div>
  );
};

export default todoComponent;
