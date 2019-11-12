import React from 'react';




function Stage(props) {
  
    const people = props.people;
    const onStageNow = people.filter(person => {
        return person.onStage;
    });
        return (
            <div>
                {onStageNow}
            </div>
        )
};


export default Stage;