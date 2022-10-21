import React from 'react';
import Auxiliary from '../../../containers/hoc/Auxiliary';
import Classes from './Person.css'

const Person = (props) => {
    return (
        <Auxiliary>
        <div className= {Classes.person}>
            <p onClick={props.click}>
                My name is {props.name} & I'am {props.age} years old 

                {/* props.children represent any thing between the opening and closing of any component */}
                <p>{props.children}</p>
            </p> 
            <input type="text" 
                onChange = {props.changed}
            />
            
        </div>
        </Auxiliary>
    )
}

export default Person;