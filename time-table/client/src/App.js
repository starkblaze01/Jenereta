import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { clearCurrentProfile } from "./actions/profileActions";
import { clearCurrentTeacher } from "./actions/teacherActions";
import { clearCurrentSubject } from "./actions/subjectActions";
import { clearCurrentClass } from "./actions/classActions";
import { clearCurrentSlot } from "./actions/slotActions";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // Clear current profile
    store.dispatch(clearCurrentProfile());
    // Clear current teacher
    store.dispatch(clearCurrentTeacher());
    // Clear current subject
    store.dispatch(clearCurrentSubject());
    // Clear current class
    store.dispatch(clearCurrentClass());
    // Clear current slot
    store.dispatch(clearCurrentSlot());
    // Redirect to login
    window.location.href = "/SignIn";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <AppRouter />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
