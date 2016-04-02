import React from "react";
import ReactDOM from "react-dom";
const remote = window.require('electron').remote;

const Menu = remote.Menu;
// Menu.setApplicationMenu(null)
import App from "./components/App";
const app = document.getElementById('app');
ReactDOM.render(<App />, app);
