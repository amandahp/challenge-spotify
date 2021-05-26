import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'

import App from './App'

import themeOne from './theme/themeOne'

import GlobalStyles from './globalStyles'

ReactDOM.render(
  <ThemeProvider theme={themeOne}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,

  document.getElementById('root')
)
