import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "./AppContainer";
import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faStar,
  faInfoCircle,
  faEye,
  faCodeBranch
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faStar, faInfoCircle, faEye, faCodeBranch);

// https://api.github.com/search/repositories?q=awe

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
