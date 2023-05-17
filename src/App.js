import { Component } from 'react';
import Cardlist from './components/card-list/card-list.componet';

import './App.css';

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      monsters: [],
      searchField: '',
    }
    console.log('constructor')
  }
  
  componentDidMount() {
    console.log('componentDidMount')
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
    console.log('render')
    
        const filteredMonsters = monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(searchField)
        })
    
    return <div className="App">
      <input className='search-Box'
        type='search'
        placeholder='search monsters'
        onChange={onSearchChange} />
      
      {
        // {
        //   filteredMonsters.map((monster) => {
        //     return <div key={monster.id}>
        //       <h1>{monster.name}</h1>
        //     </div>
        //   })
        // }
      }
        <Cardlist />
        </div>
  }
}

export default App;
