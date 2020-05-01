import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
state = {
  persons:[
    {name:"Gaoyu", age:11},
    {name:"Mike", age:12},
    {name:"Marry", age:13}

  ],

  otherState:"This is other state"

}

switchHandler = () => {
  // console.log("yes");
  // this.state.persons[0].name = "Yu Gao";//Do not mutate state directly. Use setState()
  this.setState(
    {
      persons:[
        {name:"Yu Gao", age:11},
        {name:"Mike", age:12},
        {name:"Marry", age:13}
      ]
    }
  )
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchHandler}>switch</button>
        <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies:racing</Person>
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name = {this.state.persons[2].name} age={this.state.persons[2].age}></Person>
  

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
