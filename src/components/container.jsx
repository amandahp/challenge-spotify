import React from 'react'

import { Container, Box } from './styled-components'

export const ContainerGroup = (props) => {
  return (
    <>
      <Box>
        <Container {...props}>{props.children}</Container>
      </Box>
    </>
  )
}
