import React from 'react'

import { Button } from './styled-components'

export const ButtonSearch = (props) => {
  return (
    <>
      <Button type="button" {...props}>
        {props.children}
      </Button>
    </>
  )
}
