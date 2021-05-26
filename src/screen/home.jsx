import React from 'react'

import {
  ButtonSearch,
  InputSearch,
  ContainerGroup,
  SimpleSlider
} from '../components'

export const Home = () => {
  const values = ['example', 'example2', 'example3']

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
        <SimpleSlider>
          {values.map((value, index) => {
            return <h1 key={`${index + value}`}>{value}</h1>
          })}
        </SimpleSlider>
      </ContainerGroup>
    </div>
  )
}
