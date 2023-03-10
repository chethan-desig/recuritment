import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { Provider } from "react-redux";
import config from "./store/configStore";
const store = config();
store.subscribe(() => {
  console.log(store.getState);
});
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routing />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
