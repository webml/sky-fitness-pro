import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import GlobalStyles from "./GlobalStyle/style";
import { Provider } from 'react-redux'
import store from '../src/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
