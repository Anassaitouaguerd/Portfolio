// components

import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.min.css";
import "./assets/css/slick.css";
import "./assets/css/default.css";
import "./assets/css/style.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
