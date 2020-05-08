import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

state = {
  persons:[
    {name : "Hao yun",age: 23},
    {name : "Xiao Hua", age: 17},
    {name: "Mike", age:16}
  ]
};

switchNameHandler = (newName,newName2) =>{
  this.setState({
    persons:[
      {name : newName,age: 23},
      {name :  newName2, age: 17},
      {name: "Mike", age:16}
    ]
  });
};

changeNameHandler = (event) => {
  this.setState({
    persons:[
      {name : "Gao Yu",age: 23},
      {name :  event.target.value, age: 17},
      {name: "Mike", age:16}
    ]
  })
}

    

render(){
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick = {() => this.switchNameHandler("Gao Yu!!","Mary!!!")}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          changed = {this.changeNameHandler}>My Hobbies: racing
          </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}
          click = {this.switchNameHandler.bind(this,"Yu Gao","M")}/>
  

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


