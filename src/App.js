import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
