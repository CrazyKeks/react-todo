import React from "react";

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            listTodo: [
                {
                    id: 1,
                    text: 'test'
                }
            ]
        };
        this.addTask = this.addTask.bind(this);
        this.selfValue = this.selfValue.bind(this);
    }

    selfValue(event){
        this.setState({currentValue: event.target.value})
    }

    addTask(event){
        event.preventDefault();
        const value = this.state.currentValue;
        if (value) {
            let newDataList = [...this.state.listTodo],
                lastIndex = this.state.listTodo[this.state.listTodo.length - 1].id;
                newDataList.push(
                    {
                        id: lastIndex+1,
                        text: value
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
                <form className="todo__form" onSubmit={this.addTask}>
                    <div className="todo__enter-wrap">
                        <input
                            type="text"
                            className="todo__enter"
                            placeholder={'Введите запись'}
                            onInput={this.selfValue}
                            value={this.state.currentValue}
                        />
                        <button className="todo__btn-submit">Добавить</button>
                    </div>
                    <ul className="todo__list">
                        {listTodo.map((item)=><li key={item.id}>{item.text}<button>Изменить</button></li>)}
                    </ul>
                </form>
            </div>
        )
    }
}

export default Todo;