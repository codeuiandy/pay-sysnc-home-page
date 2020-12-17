import React from "react";
import paysyncLogo from "../../assets/paysyncLogo.svg";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div
      style={
        props.background === false ? { backgroundColor: "transparent" } : {}
      }
      className="navbar-container"
    >
      <img src={paysyncLogo} alt="" className="paysync-logo" />
      <div className="navbar-mid-nav">
        <div>Employers</div>
        <div>Employees</div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/blog">
            Blogs
          </Link>
        </div>
        <div>FAQs</div>
        <div>About Us</div>
      </div>
      <div className="navbar-right">
        <button className="login-button">Login</button>
        <button className="signup-button">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
