import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span className="todo__text">{props.text}</span>
      <button className="todo__edit">Изменить</button>
      <button className="todo__del">Удалить</button>
    </li>
  );
}

export default TodoItem;