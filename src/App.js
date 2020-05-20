import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

state = {
  persons:[
    {name : "Hao yun",age: 23},
    {name : "Xiao Hua", age: 17},
    {name: "Mike", age:16}
  ],
  showPersons:false

};

deletePersonHandler = (personIndex) =>{
  //const persons = this.state.persons.slicex();
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons})
}

nameChangeHandler = (event,id) => {

  const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({ persons:persons });
}

togglePersonHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons : !doesShow});
}

  
render(){

  const style = {
    backgroundColor:"white",
    font:"inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor:"pointer"
  };

  let persons = null;

  if(this.state.showPersons){
    persons = (
    <div>
      {this.state.persons.map((person,index) => {
        return <Person 
                click = {() => this.deletePersonHandler(index)}
                name = {person.name} 
                age = {person.age}
                key = {index}
                changed = {(event) =>this.nameChangeHandler(event,person.id)}></Person>
      })}
   </div> 
  

    );

  }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
        style = {style}
        onClick = {this.togglePersonHandler}>Switch Name</button>
         {persons}
        
        

        {/* <Person name = "Gao Yu" age = "18">My hobbies:racing</Person>
        <Person name = "Mike" age = "19"></Person>
        <Person name = "Marry" age = "20"></Person> 
          
        return React.createElement("div","","h1","Hi, this is me");
        return React.createElement("div",{className:'App'},React.createElement("h1","","hi,this is new me"));
        */}

        

      </div>
    );
  }
}
export default App;


