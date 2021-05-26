import React from 'react'

import { Container, Filter } from './styled-components'

export const ContainerGroup = (props) => {
  return (
    <>
      <Container {...props}>{props.children}</Container>
      <Filter></Filter>
    </>
  )
}
