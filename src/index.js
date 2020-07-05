import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

import {ThemeProvider} from '@material-ui/core'
import theme from './theme'

import {Provider} from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>
  ,document.getElementById('root')
);