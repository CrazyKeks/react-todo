import React from "react";

function TodoItem(props) {

    const editAndRemoveBtn = ()=>{
        return(
            <li>
                <div className="todo__text" contentEditable={false}>{props.text}</div>
                <div className="todo__wrap-btn">
                    <button className="todo__edit" onClick={props.onEdit}>Изменить</button>
                    <button className="todo__del" onClick={props.onRemove}>Удалить</button>
                </div>
            </li>
        )
    }

    const editOptionBtn = ()=>{
        return(
            <li>
                <div className="todo__text" contentEditable={true} suppressContentEditableWarning={true} onKeyDown={props.onEditText}>{props.text}</div>
                <div className="todo__wrap-btn">
                    <button className="todo__save" onClick={props.onSaveText}>Сохранить</button>
                    <button className="todo__cancel" onClick={props.onCancelEdit}>Отменить</button>
                </div>
            </li>
        )
    }

  return (props.edit ? editOptionBtn(): editAndRemoveBtn());
}

export default TodoItem;