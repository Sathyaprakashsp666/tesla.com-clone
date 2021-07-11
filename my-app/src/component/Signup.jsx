import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) {
      return alert("please enter all the credentials");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: firstname,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:firstname,
              })
            );
            // history.push("/tesla");
          });
      })
      .catch((error) => alert(error.message));

    // setEmail("");
    // setPassword("");
    // setFirstName("");
    // setLastName("");
    // console.log(email, firstname, lastname, password);
  };
  return (
    <div className="signup">
      <div className="signup__header">
        <div className="signup__logo">
          <Link to="/">
            <img
              className="header__logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="tesla-logo"
            />
          </Link>
        </div>
        <div className="signup__language">
          <LanguageOutlinedIcon />
          <span>en-US</span>
        </div>
      </div>
      <div className="signup__formCont">
        <h1>Create Account</h1>
        <form className="signup__form" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={handleFirstName}
          />

          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={handleLastName}
          />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" value={email} onChange={handleEmail} />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
          <label htmlFor="check1">
            BY Creating a Tesla Account I, <br />
            understand and agree to Tesla's
            <br />
            Privacy Notice and Terms of use
            <br />
            (Required)
          </label>
          <input type="checkbox" id="check1" />

          <label htmlFor="check2">Send me updates from Tesla's</label>
          <input type="checkbox" id="check2" />

          <button className="signup__submitBtn">CREATE ACCOUNT</button>
          <div className="signup__divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <Link to="/login">
            <button className="signup__craeteBtn">SIGN IN</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
