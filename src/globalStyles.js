import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    body {
      margin: 0;
      padding: 0;
      font-family: Open-Sans, Helvetica, Sans-Serif;
      background-image: ${theme.backgroundColor.secondary};
      background-repeat: no-repeat;
      background-attachment: fixed; 
    }
  `}

`

export default GlobalStyle
