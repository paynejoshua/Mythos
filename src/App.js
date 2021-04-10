import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import Switch from "react-bootstrap/esm/Switch";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/LogIn";
import Profile from "./Pages/Profile";
import World from "./Pages/World";
import "bootstrap/dist/css/bootstrap.min.css";
 

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/" component={SignUp} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/world" component={World} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
