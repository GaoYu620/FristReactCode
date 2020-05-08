import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {

  const [personsState, setPersonsState] = useState({
      persons:[
        {name:"Gaoyu", age:65},
        {name:"Mike", age:12},
        {name:"Marry", age:13}
      ]  
    });

    const [otherState, setOtherState] = useState("other values");

    // console.log(personsState,otherState );

    const switchNameHandler = () =>{
      setPersonsState({
        persons:[
          {name:"Yu Gao", age:11},
          {name:"Mike", age:12},
          {name:"Marry", age:13}
        ],
        // otherState: personsState.otherState
        //we can use useState many times
      });
    }
    


    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={switchNameHandler}>switch</button>
        <Person name = {personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies:racing</Person>
        <Person name = {personsState.persons[1].name} age={personsState.persons[1].age}></Person>
        <Person name = {personsState.persons[2].name} age={personsState.persons[2].age}></Person>
  

        {/* <Person name = "Gao Yu" age = "18">My hobbies:racing</Person>
        <Person name = "Mike" age = "19"></Person>
        <Person name = "Marry" age = "20"></Person> 
          
        return React.createElement("div","","h1","Hi, this is me");
        return React.createElement("div",{className:'App'},React.createElement("h1","","hi,this is new me"));
        */}

        

      </div>
    );
}

export default App;


