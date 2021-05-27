import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    body {
      margin: 0;
      padding: 0;
      position: relative;
      font-family: Open-Sans, Helvetica, Sans-Serif;
      background-image: ${theme.backgroundColor.secondary};
      background-repeat: no-repeat;
      background-attachment: fixed;
      overflow: none; 
    };
  `}

`

export default GlobalStyle
