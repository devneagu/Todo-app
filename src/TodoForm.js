import React, { useState } from "react";

const TodoForm = function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="text-center mb-5">
      <form onSubmit={handleSubmit}>
        <input
          id="todoinput"
          value={value}
          type="text"
          placeholder="add details"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button id="addElement">Add</button>
      </form>
    </div>
  );
};
export default TodoForm;
