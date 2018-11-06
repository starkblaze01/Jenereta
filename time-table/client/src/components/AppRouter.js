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
import Dashboard from "./dashboard/Dashboard";
import SlotDetail from "./SlotDetails";
import CreateProfile from "./create-profile/CreateProfile";
import PrivateRoute from "./common/PrivateRoute";
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
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <PrivateRoute exact path="/calladdblank" component={CallAddBlank} />
          <PrivateRoute exact path="/subject" component={Subject} />
          <PrivateRoute exact path="/teacher" component={Teacher} />
          <PrivateRoute exact path="/classSection" component={ClassSection} />
          <PrivateRoute exact path="/slotdetails" component={SlotDetail} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default AppRouter;
