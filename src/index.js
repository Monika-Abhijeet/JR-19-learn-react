import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./components/redux/reducers";
import { Provider } from "react-redux";

// store => place to store all your state variable
// action => eg: increment decrement => it is a function that returns an object {type: "INCREMENT"}
// reducer => how actions transform the state and it modifies store
// dispatch => dispatch an action to the reducer

const myStore = configureStore(
  { reducer: allReducers },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
