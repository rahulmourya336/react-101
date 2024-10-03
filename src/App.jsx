import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    person: [
      { name: 'Max', age: "28" },
      { name: 'Manu', age: "14" },
      { name: 'Devi', age: "31" }
    ],
    inputValue: "",
    showPerson: true
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: event.target.value, age: "21" },
        { name: 'Manu', age: "14" },
        { name: 'Devi', age: "32" }
      ],
    });
  }

  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {
            this.state.person.map((person, index) => <Person name={person.name} age={person.age} click={this.removePersonHandler.bind(this, index)} key={index.toString()} />)
          }
        </div>
      )
    }
    return (
      <div className="App text-center">
        <h1 className="hero-text text-center">Todo Application !</h1>
        <small className="d-block">{new Date().toLocaleTimeString()}</small>
        <button onClick={this.togglePersonHandler} className="btn btn-secondary m-3">Toggle Persons</button>
        {person}
      </div>
    );
  }

  removePersonHandler(idx) {
    let newPersonState = this.state.person;
    newPersonState.splice(idx, 1);
    this.setState({ person: newPersonState });
  }

  togglePersonHandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  }

  inputFocusedHandler = (event) => {
    this.setState({ inputValue: event.target.value })
    console.log('Input focus handler', this.state.inputValue);
  }
}

export default App;
