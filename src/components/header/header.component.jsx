import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.css";
import Logo from "../../assets/O.T SHOES.png";
import CartIcon from "../cart-icon/cart-icon.component";
//import SignOut from "../../pages/Auth Page/SignUp/SignUp.component";
const Header = ({ currentUser }) => {
  console.log(currentUser);
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
        {currentUser ? (
          <div
            className="option"
            onClick={(e) => {
              auth.signOut();
              console.log("success");
            }}
          >
            Sign out
          </div>
        ) : (
          <Link className="option" to="/login">
            Login
          </Link>
        )}

        <Link className="option" to="/contact">
          Contact Us
        </Link>

        <Link className="option" to="/">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
