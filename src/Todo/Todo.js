import React, { Component } from 'react';
import './Todo.css';

class todo extends Component {
    state = ({
        inputValue: [],
        currentValue: ''
    })

    render() {
        return (
            <div className="col-md-8 col-xl-6  col-sm-12 m-auto p-4">
                <input type="text" className="form-control mb-2" placeholder="New Task" onChange={event => this.inputChangeListener(event)} />
                <button className="btn btn-sm btn-warning" onClick={this.addTaskHandler.bind(this)}>Add Task</button>
                <hr />

                { this.state.inputValue.map((item, index) => <div className="card p-2 mb-2"><li key={index}><span className={item.isCompleted ? 'completed_task' : ''}>{item.value}</span>
                    <small className="text-primary m-4 c-pointer" onClick={this.markAsCompleted.bind(this, index)}>{item.isCompleted ? 'Mark as Uncompleted' : 'Mark as Completed'}</small>
                    <small className="text-danger m-4 c-pointer" onClick={this.deleteTaskHandler.bind(this, index)}>Delete</small>
                </li></div>)}
            </div>
        );
    }

    addTaskHandler() {
        if (!this.valueExist(this.state.currentValue) && this.state.currentValue) {
            const data1 = this.state.inputValue;
            const data2 = [{ value: this.state.currentValue, isCompleted: false }];
            Array.prototype.push.apply(data1, data2);
            const data = [...data1.filter(x => x.isCompleted), ...data1.filter(x => !x.isCompleted)];
            this.setState({ inputValue: data });
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
        let toDos = this.state.inputValue;
        toDos[idx].isCompleted = !toDos[idx].isCompleted;
        toDos = [...this.state.inputValue.filter(x => !x.isCompleted), ...this.state.inputValue.filter(x => x.isCompleted)];
        this.setState({ inputValue: toDos });
    }
}

export default todo;