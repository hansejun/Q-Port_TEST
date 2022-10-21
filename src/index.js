import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import store from "./redux/configStore";
import { lightTheme } from "./styles/theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
