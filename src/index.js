
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle/style";
import { AppRoutes } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle/>
          <AppRoutes />
      </BrowserRouter>
  </React.StrictMode>
);