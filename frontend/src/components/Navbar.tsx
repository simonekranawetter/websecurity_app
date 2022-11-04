import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";

const Navbar = () => {
    const isAuthenticated = false;

  return (
    <nav className="navbar">
      <div className="nav-container flex">
        <ul className="flex navbar-nav">
          <li><NavLink className="nav-link" to="/" end>Messages</NavLink></li>
          <li><NavLink className="nav-link" to="/addMessage">Add Message</NavLink></li>
        </ul>
        {
            !isAuthenticated && <button className="login-btn">Log in</button>
        }
        {
            isAuthenticated && <Avatar />
        }
      </div>
    </nav>
  );
};

export default Navbar;
