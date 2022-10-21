import React from 'react';
import Classes from './Person.css'

const Person = (props) => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Person;