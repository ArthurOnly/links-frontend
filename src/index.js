import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

import {ThemeProvider} from '@material-ui/core'
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
  ,document.getElementById('root')
);