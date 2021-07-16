import React from "react";
import "./teslaaccount.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectUser} from "../features/userSlice"

const Teslaaccount = ({setIsMenuOpen, menuOpen}) => {

    const user = useSelector(selectUser)

    const logout = () =>{

    }
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
        <div className="teslaAccount-links">
          <Link to="/teslaaccount">Model S</Link>
          <Link to="/teslaaccount">Model 3</Link>
          <Link to="/teslaaccount">Model x</Link>
          <Link to="/teslaaccount">Model y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panel</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link to="/teslaaccount">Tesla Account</Link>
          <Link onClick={logout}>Log out</Link>
          <div
            className="teslaAccount__menu"
            onClick={() => setIsMenuOpen(!menuOpen)}
          >  {menuOpen ? "X" : "Menu"}</div>
        </div>
      </div>
      <div className="teslaAccount__info">
          <div className="teslaAccount__person">
              <h4>{user?.displayName + "'s"}</h4>
          </div>
          <div className="teslaAccount__infoRight">
              <Link>Home</Link>
              <Link>Account</Link>
              <Link>History</Link>
              <Link onClick={logout}>Sign out</Link>
          </div>
      </div>
      <div className="teslaAccount__car">
          <Car imgSrc='' model='' testDrive=''/>
          <Car imgSrc='' model='' testDrive=''/>
      </div>
    </div>
  );
};

export default Teslaaccount;
