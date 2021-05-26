import React from 'react'
import { ButtonSearch, InputSearch } from './components'

function App() {
  const handleClick = () => {
    console.log('clicou')
  }

  const handleChange = () => {
    console.log('handleChange')
  }
  return (
    <div className="App">
      <InputSearch onChange={handleChange} placeholder="Busca sua música" />
      <ButtonSearch onClick={handleClick}>Buscar</ButtonSearch>
    </div>
  )
}

export default App
