import React from 'react'
import reactDom from 'react-dom'
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
const rootTheme = createTheme({
  palette:{
    primary:{
      light: "#EB507F",
      main: "#FE024E",
      dark: "#7C2326"
    },
    secondary:{
      light: "#45F7F1",
      main: "#237C79",
      dark: "#113E3D"
    }
  }
})

reactDom.render(
  <ThemeProvider theme={rootTheme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
