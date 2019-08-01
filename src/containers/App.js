import React, { Component } from 'react';
import styleMod from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
// import ErrorBoundry from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id:"001", name: 'Max', age: 28},
      { id:"002", name: 'Manu', age: 29},
      { id:"003", name: 'Stan', age: 29}
    ],
    showPerson: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if( this.state.showPerson ) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
    }

    return (
        <WithClass classes={styleMod.App}>
          <button onClick={() => {this.setState({showCockpit: false});}}>Remove Cockpit</button>
          { this.state.showCockpit ? (
          <Cockpit 
            showPerson={this.state.showPerson}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}/>) : null }
          {persons}
        </WithClass>
      
    );
   }
}

export default App;
