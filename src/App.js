import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import SignIn from "./components/Sign-In/SignIn";
import SignUp from "./components/Sign-Up/SignUp";
const links = [
  { name: "Home", to: "/Home" },
  { name: "Sign in", to: "/SignIn" },
  { name: "Sign up", to: "/SignUp" },
];

function App() {
  return (
    <>
      <NavBar links={links} />
      <Switch>
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Home" component={Home} />
        <Redirect to="/Home" />
      </Switch>
    </>
  );
}

export default App;
