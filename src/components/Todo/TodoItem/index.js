import React from "react";
import {ItemList} from "./styled";
import {DefButton} from "../../../assets/button/styled";
import {DefInput} from "../../../assets/input/styled";
import {InputWrapper} from "../../../assets/wrapper/styled";

function TodoItem(props) {

  const editAndRemoveBtn = () => {
    return (
      <ItemList className={'todo__li'} margin={'0 0 10px 0'}>
        <div className="todo__text" contentEditable={false} title={props.text}>{props.text}</div>
        <div className="todo__wrap-btn">
          <DefButton className="todo__edit" onClick={props.onEdit} margin={'0 10px 0 0'}>Изменить</DefButton>
          <DefButton className="todo__del" onClick={props.onRemove} background={'#f44336'}>Удалить</DefButton>
        </div>
      </ItemList>
    )
  };
  const editOptionBtn = () => {
    return (
      <ItemList className={'todo__li'} margin={'0 0 10px 0'}>
        <InputWrapper margin={'0 10px 0 0'}>
          <DefInput type="text" editable="true" defaultValue={props.text} onChange={event=>props.onEditText(event.target.value)} ></DefInput>
        </InputWrapper>
        <div className="todo__wrap-btn">
          <DefButton className="todo__save" onClick={props.onSaveText} margin={'0 10px 0 0'}>
            Сохранить
          </DefButton>
          <DefButton className="todo__cancel" onClick={props.onCancelEdit} background={'#f44336'}>
            Отменить
          </DefButton>
        </div>
      </ItemList>
    )
  };

  return (props.edit ? editOptionBtn() : editAndRemoveBtn());
}

export default TodoItem;