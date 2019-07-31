import React from 'react';
// import Radium from 'radium';
import styleMod from './Person.css';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px',
    //         color: 'green'
    //     }
    // };

    const rnd = Math.random();

    if (rnd > 0.7 ) {
        throw Error('Something went wrong');
    }

    return (
        <div className={styleMod.Person} >
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;