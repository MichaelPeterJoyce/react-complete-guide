import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundry from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 12, id: 0 },
      { name: "Michael", age: 16, id: 1 },
      { name: "Sean", age: 19, id: 2 }
    ],
    showPersons: false
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons });
  };

  toggleShowHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundry key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundry>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I am react app</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button className={btnClass} onClick={this.toggleShowHandler}>
          Toggle People
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
