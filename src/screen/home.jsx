import React from 'react'

import {
  ButtonSearch,
  InputSearch,
  ContainerGroup,
  SimpleSlider
} from '../components'

import { App } from './home.styled'

export const Home = () => {
  const values = ['example', 'example2', 'example3']

  const handleClick = () => {
    console.log('clicou')
  }

  const handleChange = () => {
    console.log('handleChange')
  }
  return (
    <App className="App">
      <form>
        <InputSearch onChange={handleChange} placeholder="Busca sua música" />
        <ButtonSearch onClick={() => handleClick()}>Buscar</ButtonSearch>
      </form>
      <ContainerGroup>
        <SimpleSlider>
          {values.map((value, index) => {
            return <h1 key={`${index + value}`}>{value}</h1>
          })}
        </SimpleSlider>
      </ContainerGroup>
    </App>
  )
}
