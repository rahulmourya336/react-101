import React, { Component } from 'react';
import './InputComponent.css';

class InputComponent extends Component {
    render() {
        return (
            <div className="InputComponent">
                <span className="material-icons">
                    email
                </span>
                <label htmlFor={this.props.label || 'inputComponent'}></label>
                <input type={this.props.type || 'text'} placeholder={this.props.placeholder || 'value'} maxLength={this.props.maxLength || 64} max={this.props.max || 64} id={this.props.label || 'inputComponent'} />
            </div>
        );
    }
}

export default InputComponent;