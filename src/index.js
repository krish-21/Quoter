import { StrictMode } from "react";
import ReactDOM from "react-dom";

// Not Supported by GitHub Pages
// import { BrowserRouter } from "react-router-dom";

// Suppoerted by GitHub Pages
import { HashRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </StrictMode>,
  document.getElementById("root")
);
