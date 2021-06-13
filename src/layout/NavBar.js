import React from "react";
import "./NavBar.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

import Booking from "../components/Booking";
import Contact from "../components/Contact";
import Home from "../components/Home";
import SignUp from "../components/SignUp";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" href="/">
            Book My Arena (Logo)
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" exact to="/Booking">
              Book Now
            </NavLink>

            <NavLink className="nav-link" exact to="/Contact">
              Contact
            </NavLink>
          </div>

          <Link className="btn btn-outline-light" to="/SignUp">
            Sign Up
          </Link>
        </div>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Booking" component={Booking} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default Navbar;
