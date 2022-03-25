import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";
import Logo from "../../assets/O.T SHOES.png";
const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/collections">
          Collections
        </Link>
        <Link className="option" to="/signUp">
          Register
        </Link>
        <Link className="option" to="/login">
          Login
        </Link>
        <Link className="option" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
