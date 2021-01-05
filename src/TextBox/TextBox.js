import React from 'react'
import TextBoxUI from'./TextBox'

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        console.log('From Input method');
        return (
            TextBoxUI
        );
    }
    handleChange = (event) => {
        console.log('Updating state', event.target.value)
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        console.log(this.state.value);
    }
}


export default TextBox;