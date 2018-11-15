import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import SignIn from "./SignIn";
import Footer from "./Footer";
import "./compo.css";
import CallAddBlank from "./CallAddBlank";
import Subject from "./Subject/Subject";
import Teachers from "./Teacher/Teachers";
import ClassSection from "./ClassAndSec/ClassSection";
import Dashboard from "./dashboard/Dashboard";
import SlotDetails from "./Slot/SlotDetails";
import CreateProfile from "./create-profile/CreateProfile";
import PrivateRoute from "./common/PrivateRoute";
import { Switch, Route, Redirect } from "react-router-dom";
import EditProfile from "./edit-profile/EditProfile";
import HandBook from "./HandBook";
import DisplayTimetable from "./DisplayTimetable";

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
          <Route exact path="/handbook" component={HandBook} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <PrivateRoute exact path="/calladdblank" component={CallAddBlank} />
          <PrivateRoute
            exact
            path="/display-time-table"
            component={DisplayTimetable}
          />
          <PrivateRoute exact path="/subject" component={Subject} />
          <PrivateRoute exact path="/teacher" component={Teachers} />
          <PrivateRoute exact path="/classSection" component={ClassSection} />
          <PrivateRoute exact path="/slotdetails" component={SlotDetails} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default AppRouter;
