import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import styleMod from './App.css';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id:"001", name: 'Max', age: 28},
      { id:"002", name: 'Manu', age: 29},
      { id:"003", name: 'Stan', age: 29}
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log("I was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Maxmillian";
    this.setState({
      persons: [
        { id:"001", name: newName, age: 28},
        { id:"002", name: 'Manu', age: 30}
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherent',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    // };

    let persons = null;
    let btnClass = '';

    if( this.state.showPerson ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundry key={person.id}>
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} /> 
              </ErrorBoundry>
          })}
        </div>
      );

      btnClass = styleMod.Red;

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    };

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push(styleMod.red);
    }
    if(this.state.persons.length <= 1) {
      classes.push(styleMod.bold);
    }

    return (
      // <StyleRoot>
        <div className={styleMod.App}>
          <h1>Hi, this is React</h1>
          <p className={classes.join(' ')}>This is a text</p>
          <button 
            // style={style}
            className={btnClass}
            onClick={this.togglePersonHandler}>Toggle Persons</button>
            {persons}
        </div>
      // </StyleRoot>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
   }
}

export default App;
