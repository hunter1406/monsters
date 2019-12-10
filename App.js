import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {name: 'Dracula', id: 1},
        {name: 'Frankenstein', id: 2},
        {name: 'Zombie', id: 3}
      ],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }) )
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;

    const monstersFiltered = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    })

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        <CardList monsters={monstersFiltered}>

        </CardList>
      </div>
    );
  }
}

export default App;
