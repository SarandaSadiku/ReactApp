import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 30}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 30}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person  
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Sara')}
          changed={this.nameChangedHandler}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> My hobbies: Racing
          </Person>
      </div>
    );
  }
}

export default App;
