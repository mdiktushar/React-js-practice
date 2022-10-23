import { useState } from 'react';
import Classes from './App.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../HOC/WithClass';

const App = (props) =>{

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

  let persons = null;
  if (showPersons.showPerson) {
    persons = <Persons persons = {personsState.persons} clicked = {deletePersonHandler} changed = {nameChangeHandler}/>
  }

  return (
    <div className={Classes.App}>
      <Cockpit 
        title = {props.title}
        showPerson = {showPersons.showPerson}
        persons = {personsState.persons}
        clicked = {togglePersonsHandler}
      />
      {persons}
    </div>
  );
}

export default App;
