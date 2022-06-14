import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

console.clear();

ReactDOM.render(
    <App />
, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
