import React from 'react';

const person = (preps) => {
    return (
        <div>
            <p>My name is {preps.name}, I am {preps.age} years old.</p>
            <p>{preps.children}</p>
        </div>
    
    
    )
}


export default person;