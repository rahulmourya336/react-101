import React, { Component } from 'react';
import './Todo.css';

class todo extends Component {
    state = ({
        inputValue: [],
        currentValue: ''
    })

    render() {
        return (
            <div className="col-6 m-auto p-4">
                <input type="text" className="form-control mb-2" placeholder="New Task" onChange={event => this.inputChangeListener(event)} />
                <button className="btn btn-sm btn-secondary" onClick={this.addTaskHandler.bind(this)}>Add Task</button>
                <hr />
                { this.state.inputValue.map((item, index) => <li key={index}><span className={item.isCompleted ? 'completed_task' : ''}>{item.value}</span>
                    <small className="text-primary m-4 c-pointer" onClick={this.markAsCompleted.bind(this, index)}>{item.isCompleted ? 'Mark as Uncompleted' : 'Mark as Completed'}</small>
                    <small className="text-danger m-4 c-pointer" onClick={this.deleteTaskHandler.bind(this, index)}>Delete</small>
                </li>)}
            </div>
        );
    }

    addTaskHandler() {
        if (!this.valueExist(this.state.currentValue)) {
            const data1 = this.state.inputValue;
            const data2 = [{ value: this.state.currentValue, isCompleted: false }];
            Array.prototype.push.apply(data1, data2);
            this.setState({ inputValue: data1 });
        }
        console.log(this.state, this.state.inputValue);
    }

    valueExist(value) {
        return this.state.inputValue.map(x => x.value).includes(value);
    }

    deleteTaskHandler(idx) {
        const updatedState = this.state.inputValue;
        updatedState.splice(idx, 1);
        this.setState({ inputValue: updatedState });
    }

    inputChangeListener(event) {
        this.setState({ currentValue: event.target.value });
        console.log(this.state);
    }

    markAsCompleted(idx) {
        const toDos = this.state.inputValue;
        toDos[idx].isCompleted = !toDos[idx].isCompleted;
        this.setState({ inputValue: toDos })
    }
}

export default todo;