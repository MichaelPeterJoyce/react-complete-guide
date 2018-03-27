import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 12},
            {name: 'Michael', age: 16},
            {name: 'Sean', age: 19},
        ],
        showPersons: false
    };
    nameChangedHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    };

    deletePersonHandler = (index) => {
        const persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({
            persons: persons
        })
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}>
                            </Person>
                        )
                    })}
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hi, I am react app</h1>
                <p>This is really working</p>
                <button style={style} onClick={this.nameChangedHandler}>Toggle People</button>
                {persons}
            </div>
        );
    }
}

export default App;
