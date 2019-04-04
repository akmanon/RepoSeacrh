import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "./AppContainer";
import "./styles.css";

// https://api.github.com/search/repositories?q=awe

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
