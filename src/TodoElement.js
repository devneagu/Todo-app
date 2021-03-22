import React from "react";

const TodoElement = function TodoElement({
  item,
  index,
  checkedElement,
  updateElement,
  deleteItem,
}) {
  return (
    <form key={item.createdAt}>
      <input
        className="inputCheckbox"
        onChange={() => checkedElement(item)}
        type="checkbox"
        defaultChecked={item.completed}
      />
      <input
        className={`inputEditable`}
        type="text"
        defaultValue={item.text}
        onChange={(e) => {
          updateElement(item, e.target.value);
        }}
      ></input>
      <span className="buttonX" onClick={() => deleteItem(item)}>
        x
      </span>
    </form>
  );
};
export default TodoElement;
