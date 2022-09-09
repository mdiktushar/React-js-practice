import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>
                My name is {props.name} & I'am {props.age} years old 

                {/* props.children represent any thing between the opening and closing of any component */}
                <p>{props.children}</p>
            </p> 
            <input type="text" onChange = {props.changed}></input>
            
        </div>
    )
}

export default Person;