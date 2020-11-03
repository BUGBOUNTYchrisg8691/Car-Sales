import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
);
