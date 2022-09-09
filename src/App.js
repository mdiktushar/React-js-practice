import { useState } from 'react';
import './App.css';

// importing components
import Person from './components/Person/Person';

const App = (props) =>{

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }

  const [personsState, setPersonsState] = useState({
    persons : [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Selana', age: 30},
      {id: '3', name: 'Mithila', age: 28},
    ],
  });

  // In functional components we can use multiple useState
  const [showPersons , setShowPerson] = useState({
    showPerson: true,
  })

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...personsState.persons[personIndex]
    };
    person.name = event.target.value;

    persons = [...personsState.persons]
    persons[personIndex] = person;

    setPersonsState({
      persons: persons
    })
  
  }

  const deletePersonHandler = (persoIndex) => {
    const persons = personsState.persons.slice();
    persons.splice(persoIndex, 1)
    setPersonsState({
      persons : persons, 
    })
  }

  const togglePersonsHandler = () => {
    const doesShow = showPersons.showPerson
    setShowPerson({
      showPerson: !doesShow,
    })
  }

  let classes = ['green']
  if (personsState.persons.length <= 2) {
    classes = []
    classes.push('red')
  } 
  if (personsState.persons.length <= 1) {
    classes.push('bold')
  }


  let persons = null;
  if (showPersons.showPerson) {
    persons = (
      <div>
        {
          personsState.persons.map( (person, index) => {
            return (
              <Person 
              click = {() => deletePersonHandler(index)}
              name = {person.name} 
              age = {person.age}
              changed = {(event) => nameChangeHandler(event, person.id)}
              key = {person.id}
              >
                I love to sing
              </Person>
            )
            
          })
        }
      </div>
    )
    style.backgroundColor = 'red';
  }

  return (
    <div className="App">
      <h1>Hi, I'am a react app</h1>
      <p className= {classes.join(' ')}>This is really working</p>
      <button style={style} onClick={togglePersonsHandler}>Swithch Name</button>
      {persons}
    </div>
  );
}

export default App;
