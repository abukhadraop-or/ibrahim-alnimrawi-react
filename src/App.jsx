import Home from 'components/Home/Home';
import NavBar from 'components/Navbar/Navbar';
import SignIn from 'components/Sign-In/SignIn';
import SignUp from 'components/Sign-Up/SignUp';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'style/global-styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
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
