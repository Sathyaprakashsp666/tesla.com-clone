import React, { useState } from "react";
import Header from "./component/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Menu from "./component/Menu";
import HomePage from "./component/HomePage";
import Login from "./component/Login";

function App() {
  const [menuOpen, setIsMenuOpen] = useState(false);
  // console.log(menuOpen)
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
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
