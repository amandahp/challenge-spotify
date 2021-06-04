import React from 'react'

import { Input } from './styled-components'

export const InputSearch = (props) => {
  const { handleChange, value, placeholder } = props
  return (
    <>
      <Input
        onChange={(event) => handleChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </>
  )
}
