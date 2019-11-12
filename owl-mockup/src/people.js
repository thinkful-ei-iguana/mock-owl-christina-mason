import React from 'react';
import Person from './person'


function People(props) {
    const people = props.people;
    const activeSession = people.filter(person => {
        return person.inSession 
    });
    const outSession = people.filter(person => {
        return !person.inSession
    }); console.log(outSession)
    console.log(activeSession)
    const activePeople = activeSession.map(person => {
        return (
        <Person person={person} />
        );
    });
    const outPeople = outSession.map(person => {
        return (
        <Person person={person} />
        );
    });



  return (
    <div>
        <div>
        {activePeople}
        </div>
        <div>
        {outPeople}
        </div>
    </div> 
  );
}

export default People