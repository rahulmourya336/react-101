import React, { Component } from 'react';
import './Todo.css';

class todo extends Component {
    defaultInputClass = ['form-control mb-2', 'border-danger shake-input form-control mb-2'];
    defaultTodoInputClasses = ['p-2 mb-2 col-12 border row m-0 shadow-sm rounded', 'p-2 mb-2 col-12 border row m-0 shadow-sm rounded bg-yellowish'];
    _input = React.createRef();
    state = ({
        inputValue: [],
        currentValue: '',
        inputClasses: this.defaultInputClass[0],
        valueUpdateAtIndex: undefined,
    });


    render() {
        console.log("Render");
        return (
            <div className="col-md-8 col-xl-6  col-sm-12 m-auto p-4">
                <h1 className="mb-3 display-5"> ⚛️ Todo Application</h1>
                <input type="text" className={this.state.inputClasses} placeholder="New Task" onChange={event => this.inputChangeListener(event)} required={true} onKeyPress={this.enterKeyHandler.bind(this)} autoFocus={true} value={this.state.currentValue} ref={c => (this._input = c)} />
                <button className="btn btn-sm btn-warning" onClick={this.addTaskHandler.bind(this)} type="submit">{this.state.valueUpdateAtIndex !== undefined ? 'Update Task' : 'Add Task'}</button>
                <hr />

                {
                    this.state.inputValue.map((item, index) =>
                        <div className={item.classes} key={item.idx}>
                            <div className="col-10 p-0 text-break ">
                                <input type="checkbox" className="form-check-input m-1 center-width" id={item.idx} onClick={this.markAsCompleted.bind(this, index)} onChange={e => {}} checked={item.isCompleted} />
                                <label className={item.isCompleted ? 'completed_task form-check-label w-94' : 'form-check-label w-94'} htmlFor={item.idx}>{item.value}</label>
                            </div>
                            <div className="col-2 m-0 p-0 text-center">
                                <i className={this.state.valueUpdateAtIndex !== undefined ? "bi bi-pencil-fill text-info c-pointer no-pointer-event" : "bi bi-pencil-fill text-info c-pointer "} onClick={this.editTaskHandler.bind(this, index)} ></i>
                                <i className="bi bi-trash text-danger c-pointer p-4" onClick={this.deleteTaskHandler.bind(this, index)}></i>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }

    addTaskHandler() {
        this.setState({ inputClasses: this.state.currentValue === '' ? this.defaultInputClass[1] : this.defaultInputClass[0] });

        // [Hack]: Unable to find programmatically re-render method
        setTimeout(() => {
            this.setState({ inputClasses: this.defaultInputClass[0] });
        }, 1500);

        if (this.state.valueUpdateAtIndex !== undefined) {

            const originalState = this.state.inputValue;
            originalState[this.state.valueUpdateAtIndex]['value'] = this.state.currentValue;
            originalState[this.state.valueUpdateAtIndex]['classes'] = this.defaultTodoInputClasses[0];
            console.log(this.state);
            // originalState.splice(this.state.valueUpdateAtIndex, 1, updatedValue);
            this.setState({ valueUpdateAtIndex: undefined,  })
        } else {
            if (!this.valueExist(this.state.currentValue) && this.state.currentValue) {
                const originalState = this.state.inputValue;
                const newStateItem = [{ value: this.state.currentValue, isCompleted: false, idx: this.state.inputValue ? this.state.inputValue.length + 1 : 0, classes: this.defaultTodoInputClasses[0] }];
                Array.prototype.push.apply(originalState, newStateItem);
                const data = [...originalState.filter(x => x.isCompleted), ...originalState.filter(x => !x.isCompleted)];
                this.setState({ inputValue: data });
            }
        }
        console.log(this.state, this.state.inputValue);
        this.setState({ currentValue: '' });
        this._input.focus();
    }

    enterKeyHandler(event) {
        console.log('Enter key pressed');
        if (event && event.key === 'Enter') {
            this.addTaskHandler();
        }
    }

    valueExist(value) {
        return this.state.inputValue.map(x => x.value).includes(value);
    }

    deleteTaskHandler(idx) {
        const updatedState = this.state.inputValue;
        updatedState.splice(idx, 1);
        const updateFieldIfInEditMode = {};
        if (this.state.valueUpdateAtIndex !== undefined) {
            updateFieldIfInEditMode.valueUpdateAtIndex = undefined;
            updateFieldIfInEditMode.currentValue = '';
        }
        this.setState({ inputValue: updatedState, ...updateFieldIfInEditMode });
    }

    editTaskHandler(idx) {
        const todoList = this.state.inputValue;
        todoList[idx]['classes'] = this.defaultTodoInputClasses[1];
        const valueToEdit = this.state.inputValue[idx]['value'];
        this.setState({ valueUpdateAtIndex: idx, currentValue: valueToEdit || '', inputValue: todoList});
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