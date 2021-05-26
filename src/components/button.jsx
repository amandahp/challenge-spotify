import React from 'react'

import { Button } from './styled-components'

export const ButtonSearch = (props) => {
  return (
    <>
      <Button {...props}>{props.children}</Button>
    </>
  )
}
