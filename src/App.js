//import { Component } from 'react';
import Cardlist from './components/card-list/card-list.componet';
import SearchBox from './components/search-box/search-box.component'
import {useState, useEffect} from 'react'

import './App.css';

const App = () => { 
  console.log('render')
  const [searchField, setSearchField] = useState('') // [values, setValues] is how this works
  console.log(searchField)
  const [monsters, setMonsters] = useState([])
  const[filteredMonsters, setFilteredMonsters] = useState(monsters)
  
  useEffect(() => {
    console.log('useEffect')
    fetch('https://jsonplaceholder.typicode.com/users') // fetch is a method that returns a promise
    .then(response => response.json()) 
    .then((users) => setMonsters(users))
  }, []) // empty array means only run once
  useEffect(() => { 
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    console.log(filteredMonsters)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Kitty Rolodex</h1>
        <SearchBox 
          className='search-box'
          placeholder='search kitties'
        onChangeHandler={onSearchChange}
      />
        <Cardlist monsters={filteredMonsters} />
      {
        /*
      */
      }
      </div>
  )

}

/*
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
    
    return ()
}
*/
export default App;
