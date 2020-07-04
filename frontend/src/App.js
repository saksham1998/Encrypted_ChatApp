import React, { Component } from "react";
import { Route } from "react-router-dom";
import Register from "./components/register";
import Signin from "./components/signin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Register} />
        <Route path="/login" component={Signin} />
      </div>
    );
  }
}

export default App;
