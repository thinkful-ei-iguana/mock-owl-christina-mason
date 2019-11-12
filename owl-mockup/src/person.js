import React from 'react';

function Person(props) {
    const person = props.person
    return(
    <div>
        <img src={person.avatar} />
        <h1>{person.name} </h1>
        <p>{person.onStage ? "on stage": "off stage"}</p>
    </div>
    )
}

export default Person