import React, { useState } from "react";
import Header from "./component/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Menu from "./component/Menu";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const [menuOpen, setIsMenuOpen] = useState(false);
  // console.log(menuOpen)

  const user = useSelector(selectUser); //taking user data from redux state

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header menuOpen={menuOpen} setIsMenuOpen={setIsMenuOpen} />
            {menuOpen && <Menu />}
            <HomePage />
          </Route>

          <Route path="/login">
            {user ? <Redirect to="teslaacount" /> : <Login />}
          </Route>

          <Route to="teslaacount"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
