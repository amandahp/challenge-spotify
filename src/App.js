import React from 'react'
import {
  ButtonSearch,
  InputSearch,
  ContainerGroup,
  SimpleSlider
} from './components'

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
      <ContainerGroup>
        <SimpleSlider></SimpleSlider>
      </ContainerGroup>
    </div>
  )
}

export default App
