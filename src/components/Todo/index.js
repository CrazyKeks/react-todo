import React, {useState} from "react";
import TodoItem from "./TodoItem";
import {TodoWrap} from "./styled";
import {DefTitle} from "../../assets/title/styled";
import {DefButton} from "../../assets/button/styled";
import {DefInput} from "../../assets/input/styled";
import {InputWrapper} from "../../assets/wrapper/styled";
import './style.css'

function Todo() {
    let state = {
        currentValue: '',
        editTextTask: '',
        listTodo: [
            {
                id: 1,
                text: 'test',
                edit: false,
            }
        ]
    };

    function editTask(id,text){
        let newDataList = [...todoState.listTodo];
        newDataList.map((item)=> {
            if (item.id === id) {
                item.edit = true;
            }
        });
        updateStateTodo({
            listTodo: newDataList,
            editTextTask: text
        });
    }

    function removeTask(id) {
        let newDataList = [...todoState.listTodo];
        newDataList.map((item, index)=>{
            if (item.id === id) {
                newDataList.splice(index, 1)
            }
        });
        updateStateTodo({listTodo: newDataList});
    }

    function cancelTask(id){
        let newDataList = [...todoState.listTodo];
        newDataList.map((item)=>{
            if (item.id === id) {
                item.edit = false;
            }
        });
        updateStateTodo({
            listTodo: newDataList,
            editTextTask: ''
        });
    }

    function saveTask(id) {
        let newDataList = [...todoState.listTodo];
        newDataList.map((item)=>{
            if (item.id === id) {
                item.text = todoState.editTextTask;
                item.edit = false;
            }
        });
        updateStateTodo({
            editTextTask: '',
            listTodo: newDataList
        });
    }

    function selfValue(event) {
        updateStateTodo({currentValue: event.target.value})
    }

    function editTextTaskValue(event) {
        updateStateTodo({editTextTask: event.target.value})
    }

    function addTask(event) {
        event.preventDefault();
        const value = todoState.currentValue;
        if (value) {
            let newDataList = [...todoState.listTodo],
                lastIndex;

            if (todoState.listTodo.length === 0) {
                lastIndex = 0;
            } else {
                lastIndex = todoState.listTodo[todoState.listTodo.length - 1].id;
            }

            newDataList.push(
                {
                    id: ++lastIndex,
                    text: value,
                    edit: false,
                }
            );
            updateStateTodo({
                currentValue: '',
                listTodo:newDataList
            })
        }
    }

    const [todoState, updateStateTodo] = useState(state);
    return (
        <div className="todo">
            <DefTitle className="todo__title">Todo лист</DefTitle>
            <form className="todo__form" onSubmit={addTask}>
                <div className="todo__enter-wrap">
                    <InputWrapper margin={'0 10px 0 0'}>
                        <DefInput
                            type="text"
                            className="todo__enter"
                            placeholder='Введите запись'
                            onChange ={selfValue}
                            value={todoState.currentValue}
                        />
                    </InputWrapper>
                    <DefButton className="todo__btn-submit">Добавить</DefButton>
                </div>
                <TodoWrap className="todo__list">
                    {
                        todoState.listTodo.map((item)=>{
                            return <TodoItem
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                edit={item.edit}
                                onEdit={()=>editTask(item.id, item.text)}
                                onRemove={()=>removeTask(item.id)}
                                onEditText={editTextTaskValue}
                                onSaveText={()=>saveTask(item.id)}
                                onCancelEdit={()=>cancelTask(item.id)}
                            />
                        })
                    }
                </TodoWrap>
            </form>
        </div>
    )
}
export default Todo;