import React, { useState } from "react";

const TodoElement = function TodoElement({
  item,
  index,
  checkedElement,
  updateElement,
}) {
  const [textValue, setTextValue] = useState(item.text);
  return (
    <form key={index}>
      <input
        className="inputCheckbox"
        onChange={() => checkedElement(index, item)}
        type="checkbox"
        defaultChecked={item.completed}
      />
      <input
        className={`inputEditable`}
        type="text"
        defaultValue={item.text}
        onChange={(e) => {
          setTextValue(e.target.value);
          updateElement(index, textValue);
        }}
      ></input>
    </form>
  );
};
export default TodoElement;
