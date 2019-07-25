import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("I was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Maxmillian";
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 30}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value , age: 30}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherent',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, this is Quent</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/> 
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Quent')}
          changed={this.nameChangedHandler}>My Hobbies: Painting</Person> 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
   }
}

export default App;
