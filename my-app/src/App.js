import React, { useState } from "react";
import Header from "./component/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Menu from "./component/Menu";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Signup from "./component/Signup";
import Teslaaccount from "./component/Teslaaccount";

function App() {
  const [menuOpen, setIsMenuOpen] = useState(false);
  // console.log(menuOpen)

  const user = useSelector(selectUser); //taking user data from redux state
  console.log(user);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header menuOpen={menuOpen} setIsMenuOpen={setIsMenuOpen} />
            {menuOpen && <Menu />}
            <HomePage />
          </Route>

          <Route exact path="/login">
            {/* {user ? <Redirect to="/tesla" /> : <Login />} */}
            <Login/>
          </Route>

          <Route exact to="/signup">
            <Signup />
          </Route>

          <Route exact to="/tesla">
            {/* {user ? <Teslaaccount /> : <Redirect to="/login" />} */}
            <Teslaaccount/>
          </Route>

          <Route exact to="/try">hi</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
