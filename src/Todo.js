import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoElement from "./TodoElement";

const TodoComponent = () => {
  const [storedTodo, setStoredTodo] = useState(
    JSON.parse(localStorage.getItem("storedTodo")) || []
  );

  const [toggle, setToggle] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  useEffect(() => {
    localStorage.setItem("storedTodo", JSON.stringify(storedTodo));
  }, [storedTodo]);
  function addTodo(text) {
    const dataTodo = [
      ...storedTodo,
      {
        text: text,
        createdAt: new Date().getTime(),
        completed: false,
      },
    ];
    setStoredTodo(dataTodo);
  }

  function updateElement(item, text) {
    const editedTaskList = storedTodo.map((task) => {
      if (task.createdAt === item.createdAt) {
        return { ...task, text: text };
      }
      return task;
    });
    setStoredTodo(editedTaskList);
  }
  function checkedElement(item) {
    const editedTaskList = storedTodo.map((task) => {
      if (task.createdAt === item.createdAt) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setStoredTodo(editedTaskList);
  }
  function deleteItem(item) {
    console.log(item);
    const remainingTasks = storedTodo.filter(
      (task) => item.createdAt !== task.createdAt
    );
    setStoredTodo(remainingTasks);
  }

  function mapFunction(item, index) {
    return (
      <TodoElement
        key={index}
        item={item}
        index={index}
        checkedElement={checkedElement}
        updateElement={updateElement}
        deleteItem={deleteItem}
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
          <h1>You are all done here</h1>
        ) : (
          storedTodo
            .filter(FILTER_MAP[toggle])
            .map((item, index) => mapFunction(item, index))
        )}
      </div>
    </div>
  );
};

export default TodoComponent;
