import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29}
    ],
    showPerson: false
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherent',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if( this.state.showPerson ) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              age={person.age}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, this is Quent</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
   }
}

export default App;
