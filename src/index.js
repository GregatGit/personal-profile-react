import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import { createMuiTheme } from '@material-ui/core'
// import {red, amber } from '@material-ui/core/colors'

// const theme = createMuiTheme({
//   palette: {
//     primary: red,
//     secondary: {
//       main: amber[500],
//       // light: ,
//       // dark: 
//     },
//     type: 'light'
//   }
// })

ReactDOM.render(
  //<MuiThemeProvider theme={theme}>
    <App />,
  //</MuiThemeProvider>,
  document.getElementById('root')
)
