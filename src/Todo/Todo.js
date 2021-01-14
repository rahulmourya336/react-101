import React, { Component } from 'react';
import './Todo.css';

class todo extends Component {
    defaultInputClass = ['form-control mb-2', 'border-danger shake-input form-control mb-2'];
    _input = React.createRef();
    state = ({
        inputValue: [],
        currentValue: '',
        inputClasses: this.defaultInputClass[0]
    });


    render() {
        console.log("Render");
        return (
            <div className="col-md-8 col-xl-6  col-sm-12 m-auto p-4">
                <h1 className="mb-3 display-5"> ⚛️ Todo Application</h1>
                <input type="text" className={this.state.inputClasses} placeholder="New Task" onChange={event => this.inputChangeListener(event)} required={true} onKeyPress={this.enterKeyHandler.bind(this)} autoFocus={true} value={this.state.currentValue} ref={c => (this._input = c)} />
                <button className="btn btn-sm btn-warning" onClick={this.addTaskHandler.bind(this)} type="submit">Add Task</button>
                <hr />

                {
                    this.state.inputValue.map((item, index) =>
                        <div className="p-2 mb-2 col-12 border row m-0 shadow-sm rounded" key={item.idx}>
                            <div className="col-11 p-0 text-break ">
                                <input type="checkbox" className="form-check-input m-1 center-width" id={item.idx} onClick={this.markAsCompleted.bind(this, index)} checked={item.isCompleted} />
                                <label className={item.isCompleted ? 'completed_task form-check-label w-94' : 'form-check-label w-94'} for={item.idx}>{item.value}</label>
                            </div>
                            <div className="col-1">
                                <i className="bi bi-trash text-danger c-pointer" onClick={this.deleteTaskHandler.bind(this, index)}></i>
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

        if (!this.valueExist(this.state.currentValue) && this.state.currentValue) {
            const originalState = this.state.inputValue;
            const newStateItem = [{ value: this.state.currentValue, isCompleted: false, idx: this.state.inputValue ? this.state.inputValue.length + 1 : 0 }];
            Array.prototype.push.apply(originalState, newStateItem);
            const data = [...originalState.filter(x => x.isCompleted), ...originalState.filter(x => !x.isCompleted)];
            this.setState({ inputValue: data });
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