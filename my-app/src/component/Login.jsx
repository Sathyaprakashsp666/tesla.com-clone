import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import "./Login.css";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        // history.push("/tesla");
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
    // console.log(payload);
  };

  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link to="/">
            <img
              className="header__logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="tesla-logo"
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageOutlinedIcon />
          <span>en-US</span>
        </div>
      </div>
      <div className="login__formCont">
        <h1>Sign In</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" value={email} onChange={handleEmail} />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
          <button className="login__submitBtn">SIGN IN</button>
          <div className="login__divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <Link to="/signup">
            <button className="login__craeteBtn">CREATE ACCCOUNT</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
