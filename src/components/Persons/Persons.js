import React from 'react'
import Person from './Person/Person'

const Persons = (props) => props.persons.map( (person, index) => {
        return (
          <Person 
          click = {() => props.clicked(index)}
          name = {person.name} 
          age = {person.age}
          changed = {(event) => props.changed(event, person.id)}
          key = {person.id}
          >
            I love to sing
          </Person>
        )
        
    })


export default Persons