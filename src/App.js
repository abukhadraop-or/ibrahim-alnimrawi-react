import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import SignIn from "./components/Sign-In/SignIn";
import SignUp from "./components/Sign-Up/SignUp";
import Home from "./components/Home/Home";
const links = [
  { name: "Home", to: "/Home" },
  { name: "Sign in", to: "/SignIn" },
  { name: "Sign up", to: "/SignUp" },
];

function App() {
  return (
    <React.Fragment>
      <NavBar links={links} />
      <Switch>
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Home" component={Home} />
        <Redirect to="/Home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
