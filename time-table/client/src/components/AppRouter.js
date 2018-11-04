import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import SignIn from "./SignIn";
import Footer from "./Footer";
import "./compo.css";
import CallAddBlank from "./CallAddBlank";
import Subject from "./Subject";
import Teacher from "./Teachers";
import ClassSection from "./ClassSection";
import SlotDetail from "./SlotDetails";
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
          <Route exact path="/calladdblank" component={CallAddBlank} />
          <Route path="/subject" component={Subject} />
          <Route path="/teacher" component={Teacher} />
          <Route path="/classSection" component={ClassSection} />
          <Route path="/slotdetails" component={SlotDetail} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default AppRouter;
