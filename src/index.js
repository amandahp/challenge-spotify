import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import App from './App'

import themeOne from './theme/themeOne'
import store from './store/initializeStore'

import GlobalStyles from './globalStyles'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themeOne}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
)
