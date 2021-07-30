import React from "react";
import reactDom from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Footer from "./components/Footer";
const rootTheme = createTheme({});

reactDom.render(
  <ThemeProvider theme={rootTheme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
