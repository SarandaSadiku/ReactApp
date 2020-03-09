import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button `
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid green;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
    color: #000
  }
`;

class App extends Component {

  state = {
    persons: [
      { id:'ffdf1', name: 'Max', age: 28 },
      { id:'ffdf12', name: 'Manu', age: 29 },
      { id:'ffdf13', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    const style = {
      
    }
    let persons = null;
    if (this.state.showPersons){
      persons = (
         <div>
         {this.state.persons.map((person, index) => { 
           return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
         })}
          </div>
      )
      style.backgroundColor = 'red';
      style.border = '1px solid red';
      style['hover'] = {
        backgroundColor: 'salmon',
        color: '#000'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          onClick={this.togglePersonsHandler} >Switch Name
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
