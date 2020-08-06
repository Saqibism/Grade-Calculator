import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Calculator from "./components/Calculator.js";
import Header from "./components/Header";
import Results from "./components/Results";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import backgroundImage from "./pictures/background.JPEG";

ReactDOM.render(
  <React.StrictMode>
    <div id="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <Calculator />
      <Results />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
