import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Menu from "./component/Menu";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Signup from "./component/Signup";
import Teslaaccount from "./component/Teslaaccount";
import { auth } from "./firebase/firebase";
import PageNotFound from "./component/PageNotFound";

function App() {
  const [menuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  // console.log(menuOpen)

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      //firesbase persistance
      if (userAuth) {
        //user is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //user is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
            {user ? <Redirect to="/teslaaccount" /> : <Login />}
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/teslaaccount">
            {!user ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Teslaaccount
                  menuOpen={menuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {menuOpen && <Menu />}
              </>
            )}
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
