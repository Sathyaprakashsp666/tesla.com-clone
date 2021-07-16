import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import CloseIcon from "@material-ui/icons/Close";

const Header = (props) => {
  const { menuOpen, setIsMenuOpen } = props;
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logoImg"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt="tesla-logo"
          />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model x</Link>
        <Link to="/">Model y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panel</Link>
      </div>
      <div className="header__right" >
        <Link to="" className={menuOpen && 'header__hideden'}>Shop</Link>
        <Link to="" className={menuOpen && 'header__hideden'}>Account</Link>
        <div className="header__menu" onClick={() => setIsMenuOpen(!menuOpen)}>
          <Link to="">{menuOpen ?  <CloseIcon /> : "Menu"}</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
