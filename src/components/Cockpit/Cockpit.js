import React from 'react'

import Classes from './Cockpit.css'

const Cockpit = (props) => {
  let btnClass = ''
  if (props.showPerson) {
    btnClass = Classes.Red
  }
  
  let assignedClassses = ['green']
  if (props.persons.length <= 2) {
    assignedClassses = []
    assignedClassses.push(Classes.red)
  } 
  if (props.persons.length <= 1) {
    assignedClassses.push(Classes.bold)
  }
  return (
    <div className={Classes.Cockpit}>
      <h1>Hi, I'am a react app</h1>
      <p className={assignedClassses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>Swithch Name</button>
    </div>
  )
}

export default Cockpit