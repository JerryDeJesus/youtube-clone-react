import "./App.css";
import React from "react";
import { Component } from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Route path="">
          <NavBar />
        </Route>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          {/* <Route path="/videos/">
            <Videos />
          </Route> */}
        </Switch>
      </div>
    );
  }
}

export default App;
