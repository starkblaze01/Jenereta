import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import SignIn from "./SignIn";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/aboutus" component={About} />
          <Route path="/SignIn" component={SignIn} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default AppRouter;
