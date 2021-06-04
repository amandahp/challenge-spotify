import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/ducks/search/actions'

import { AlbumImage } from '../components/styled-components'
import {
  ButtonSearch,
  InputSearch,
  ContainerGroup,
  SimpleSlider,
  SoundBox
} from '../components'

import { App } from './home.styled'

export const Home = () => {
  const dispatch = useDispatch()
  const songData = useSelector((state) => state.searchReducer.data)
  const [inputSearch, setInputSearch] = useState('')

  const handleClick = () => {
    if (inputSearch) {
      dispatch(fetchData(inputSearch))
      setInputSearch('')
    }
  }

  const handleChange = (songName) => {
    setInputSearch(songName)
  }

  useEffect(() => {
    // inicia a pagina com uma busca por musicas aleatorias que começam com a letra A
    dispatch(fetchData('A'))
  }, [])

  return (
    <App className="App">
      <form>
        <InputSearch
          value={inputSearch}
          handleChange={handleChange}
          placeholder="Busque sua música"
        />
        <ButtonSearch onClick={() => handleClick()}>Buscar</ButtonSearch>
      </form>
      <ContainerGroup>
        <SimpleSlider>
          {songData.map((value, index) => {
            return (
              <SoundBox key={index + 1}>
                <AlbumImage src={value.album.images[1].url} />
                <h3>{value.artists[0].name}</h3>
                <h6>{value.name}</h6> _
              </SoundBox>
            )
          })}
        </SimpleSlider>
      </ContainerGroup>
    </App>
  )
}
