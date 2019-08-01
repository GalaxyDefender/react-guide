import React, {Component} from 'react';
import Aux from '../../../hoc/Auxilary';
// import styleMod from './Person.css';

class Person extends Component {

    componentDidMount() {
        console.log('[Person.js] componentDidMount....');
        this.inputElement.focus();
    }

    render() {
        console.log('[Person.js] rendering....');
        return (
            <Aux>
            {/* // <div className={styleMod.Person} > */}
                <p key="k1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="k2">{this.props.children}</p>
                <input 
                    key="k3" 
                    ref={(inputEl) => {this.inputElement = inputEl}}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            {/* // </div> */}
            </Aux>
        );
    } 
};

export default Person;