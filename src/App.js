import React from 'react';
import Person from './components/Person';
import './App.css';

class App extends React.Component {

state = {
  persons: [
    {id: 1, name: "Alex", age: 18, pet: "Molly"},
    {id: 2, name: "Ben", age: 21, pet: "Sammi"},
    {id: 3, name: "Charlie", age: 25, pet: "Tommy"}
  ]
}
    render() {
      const eachPerson = this.state.persons.map((person) => {
        return <Person key = {person.id} name = {person.name} age = {person.age} pet = {person.pet}/>
      });

      return (
      <div className="App">
        <h1>My React Project</h1>
        {eachPerson}
      </div>
    )
  } 
}

export default App;
