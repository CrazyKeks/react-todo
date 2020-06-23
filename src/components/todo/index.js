import React from "react";

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            listTodo: []
        };
        this.addTask = this.addTask.bind(this);
        this.selfValue = this.selfValue.bind(this);
    }

    selfValue(event){
        this.setState({currentValue: event.target.value})
    }

    addTask(event){
        let {value} = this.state;
        if (value) {

        }
    }

    render() {
        return (
            <div className="todo">
                <form className="todo__form" onSubmit={this.addTask}>
                    <div className="todo__enter-wrap">
                        <input
                            type="text"
                            className="todo__enter"
                            placeholder={'Введите запись'}
                            onInput={this.selfValue}
                        />
                        <button className="todo__btn-submit">Добавить</button>
                    </div>
                    <ul className="todo__list">
                        <li className="todo__item">Тестовая запись</li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default Todo;