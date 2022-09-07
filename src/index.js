import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";
import HelloWorldCSSTransition from "./components/HelloWorldCSSTransition";
ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(
  <React.StrictMode>
    <HelloWorldCSSTransition />
  </React.StrictMode>,
  document.getElementById("reggea")
);
