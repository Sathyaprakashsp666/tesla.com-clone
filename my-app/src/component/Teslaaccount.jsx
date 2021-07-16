import React from "react";
import "./teslaaccount.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "../features/userSlice";
import Car from "./Car";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { auth } from "../firebase/firebase";

const Teslaaccount = ({ setIsMenuOpen, menuOpen }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="teslaAccount">
      <div className="teslaAccount__header">
        <div className="teslaAccount__logo">
          <Link to="/">
            <img
              className="header__logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="tesla-logo"
            />
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/teslaaccount">Model S</Link>
          <Link to="/teslaaccount">Model 3</Link>
          <Link to="/teslaaccount">Model x</Link>
          <Link to="/teslaaccount">Model y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panel</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link to="/teslaaccount">Account</Link>
          <Link onClick={logoutApp}>Logout</Link>
          <div
            className="teslaAccount__menu"
            onClick={() => setIsMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon className="closeMenu" /> : <MenuIcon />}
          </div>
        </div>
      </div>
      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{user?.displayName + "'s"}&nbsp; Tesla</h4>
        </div>
        <div className="teslaAccount__infoRight">
          <Link to="/">Home</Link>
          <Link to="signup">Account</Link>
          <Link to="">History</Link>
          <Link onClick={logoutApp}>Sign out</Link>
        </div>
      </div>
      <div className="teslaAccount__car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </div>
  );
};

export default Teslaaccount;
