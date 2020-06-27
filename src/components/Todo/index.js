import React from "react";
import TodoItem from "./TodoItem";
import {TodoWrap} from "./styled";
import {DefTitle} from "../../assets/title/styled";
import {DefButton} from "../../assets/button/styled";
import {DefInput} from "../../assets/input/styled";
import {InputWrapper} from "../../assets/wrapper/styled";
import './style.css'

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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

        this.addTask = this.addTask.bind(this);
        this.selfValue = this.selfValue.bind(this);
        this.editTask = this.editTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.cancelTask = this.cancelTask.bind(this);
        this.editTextTaskValue = this.editTextTaskValue.bind(this);
    }

    editTask(id,text){
        let newDataList = [...this.state.listTodo];
        newDataList.map((item)=> {
            if (item.id === id) {
                item.edit = true;
            }
        });
        this.setState({
            listTodo: newDataList,
            editTextTask: text
        });
    }

    removeTask(id) {
        let newDataList = [...this.state.listTodo];
        newDataList.map((item, index)=>{
            if (item.id === id) {
                newDataList.splice(index, 1)
            }
        });
        this.setState({listTodo: newDataList});
    }

    cancelTask(id){
        let newDataList = [...this.state.listTodo];
        newDataList.map((item)=>{
            if (item.id === id) {
                item.edit = false;
            }
        });
        this.setState({
            listTodo: newDataList,
            editTextTask: ''
        });
    }

    saveTask(id) {
        let newDataList = [...this.state.listTodo];
        newDataList.map((item)=>{
            if (item.id === id) {
                item.text = this.state.editTextTask;
                item.edit = false;
            }
        });
        this.setState({
            editTextTask: '',
            listTodo: newDataList
        });
    }

    selfValue(event) {
        this.setState({currentValue: event.target.value})
    }

    editTextTaskValue(event) {
        this.setState({editTextTask: event.target.value})
    }

    addTask(event) {
        event.preventDefault();
        const value = this.state.currentValue;
        if (value) {
            let newDataList = [...this.state.listTodo],
                lastIndex;

            if (this.state.listTodo.length === 0) {
                lastIndex = 0;
            } else {
                lastIndex = this.state.listTodo[this.state.listTodo.length - 1].id;
            }

            newDataList.push(
                {
                    id: ++lastIndex,
                    text: value,
                    edit: false,
                }
            );
            this.setState({
                currentValue: '',
                listTodo:newDataList
            })
        }
    }

    render() {
        let {listTodo} = this.state;
        return (
            <div className="todo">
                <DefTitle className="todo__title">Todo лист</DefTitle>
                <form className="todo__form" onSubmit={this.addTask}>
                    <div className="todo__enter-wrap">
                        <InputWrapper margin={'0 10px 0 0'}>
                            <DefInput
                                type="text"
                                className="todo__enter"
                                placeholder='Введите запись'
                                onChange ={this.selfValue}
                                value={this.state.currentValue}
                            />
                        </InputWrapper>
                        <DefButton className="todo__btn-submit">Добавить</DefButton>
                    </div>
                    <TodoWrap className="todo__list">
                      {
                        listTodo.map((item)=>{
                          return <TodoItem
                              key={item.id}
                              id={item.id}
                              text={item.text}
                              edit={item.edit}
                              onEdit={()=>this.editTask(item.id, item.text)}
                              onRemove={()=>this.removeTask(item.id)}
                              onEditText={this.editTextTaskValue}
                              onSaveText={()=>this.saveTask(item.id)}
                              onCancelEdit={()=>this.cancelTask(item.id)}
                          />
                        })
                      }
                    </TodoWrap>
                </form>
            </div>
        )
    }
}

export default Todo;