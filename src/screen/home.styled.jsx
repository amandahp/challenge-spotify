import styled from 'styled-components'

export const App = styled.div`
  ${({ theme }) => `
    form{
      position: relative;
      width: 100%;
      margin-top:${theme.baseValueToRem(80)};
  `}
`
