import { Component } from 'react';
import Cardlist from './components/card-list/card-list.componet';
import SearchBox from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // fetch is a method that returns a promise
      .then(response => response.json()) // response.json() is a method that returns a promise
      .then((users) => this.setState(() => {
        return { monsters: users }
      }))
  }

  onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })}
  
  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this
    
        const filteredMonsters = monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(searchField)
        })
    
    return <div className="App">
      <h1 className='app-title'>Kitty Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Cats'
        className='monsters-search-box' />
      <Cardlist monsters={filteredMonsters} />
        </div>
  }
}

export default App;
