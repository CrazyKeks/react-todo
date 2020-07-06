import React, {useState} from "react";
import TodoItem from "./TodoItem";
import {TodoWrap} from "./styled";
import {DefTitle} from "../../assets/title/styled";
import {DefButton} from "../../assets/button/styled";
import {DefInput} from "../../assets/input/styled";
import {InputWrapper} from "../../assets/wrapper/styled";
import './style.css'

function Todo() {

    function editTask(id,text){
        let newDataList = [...todoList];
        newDataList.map((item)=> {
            if (item.id === id) {
                item.edit = true;
            }
        });
        setEditTextTask(text);
        setListState(newDataList);
    }

    function removeTask(id) {
        let newDataList = [...todoList];
        newDataList.map((item, index)=>{
            if (item.id === id) {
                newDataList.splice(index, 1)
            }
        });
        setListState(newDataList);
    }

    function cancelTask(id){
        let newDataList = [...todoList];
        newDataList.map((item)=>{
            if (item.id === id) {
                item.edit = false;
            }
        });
        setEditTextTask('');
        setListState(newDataList);
    }

    function saveTask(id) {
        let newDataList = [...todoList];
        newDataList.map((item)=>{
            if (item.id === id) {
                item.text = editTextTask;
                item.edit = false;
            }
        });
        setEditTextTask('');
        setListState(newDataList);
    }

    function addTask(event) {
        event.preventDefault();
        const value = currentValue;
        if (value) {
            let newDataList = [...todoList],
                lastIndex;

            if (newDataList.length === 0) {
                lastIndex = 0;
            } else {
                lastIndex = newDataList[newDataList.length - 1].id;
            }

            newDataList.push(
                {
                    id: ++lastIndex,
                    text: value,
                    edit: false,
                }
            );
            setCurrentValue('');
            setListState(newDataList);
        }
    }

    const [currentValue, setCurrentValue] = useState(''),
          [editTextTask, setEditTextTask] = useState(''),
          [todoList, setListState] = useState( [
                {
                    id: 1,
                    text: 'test',
                    edit: false,
                }
            ]
        );
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
                            onChange ={event=>setCurrentValue(event.target.value)}
                            value={currentValue}
                        />
                    </InputWrapper>
                    <DefButton className="todo__btn-submit">Добавить</DefButton>
                </div>
                <TodoWrap className="todo__list">
                    {
                        todoList.map((item)=>{
                            return <TodoItem
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                edit={item.edit}
                                onEdit={()=>editTask(item.id, item.text)}
                                onEditText={setEditTextTask}
                                onRemove={()=>removeTask(item.id)}
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