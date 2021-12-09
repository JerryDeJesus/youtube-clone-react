import "./App.css";
import React from "react";
import { Component } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import Videos from "./components/Videos";

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <Route path="">
          <NavBar />
        </Route>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/videos/:id" component={Videos}/>

        </Switch>
      </div>
    );
  }
}

export default App;
