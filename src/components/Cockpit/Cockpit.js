import React, { useEffect }from 'react';

import styleMod from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    const classes = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = styleMod.Red;
    }
    
    if(props.personsLength <= 2) {
      classes.push(styleMod.red);
    }
    if(props.personsLength <= 1) {
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

export default React.memo(cockpit);