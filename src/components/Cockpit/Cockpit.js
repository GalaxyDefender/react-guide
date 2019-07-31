import React from 'react';

import styleMod from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = styleMod.Red;
    }
    
    if(props.persons.length <= 2) {
      classes.push(styleMod.red);
    }
    if(props.persons.length <= 1) {
      classes.push(styleMod.bold);
    }

    return (
        <div className={styleMod.Cockpit}>
            <h1>Hi, this is React</h1>
            <p className={classes.join(' ')}>This is a text</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
        
    );
}

export default cockpit;