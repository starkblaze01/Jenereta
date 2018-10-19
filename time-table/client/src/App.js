import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AppRouter from "./components/AppRouter";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
