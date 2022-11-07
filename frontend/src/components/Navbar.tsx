import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();


  return (
    <nav className="navbar">
      <div className="nav-container flex">
        <ul className="flex navbar-nav">
          <li>
            <NavLink className="nav-link" to="/" end>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/addMessage">
              Add Message
            </NavLink>
          </li>
        </ul>
        {!isAuthenticated && <button onClick={() => loginWithRedirect()} className="login-btn">Log in</button>}
        {isAuthenticated && <Avatar user={user} />}
      </div>
    </nav>
  );
};

export default Navbar;
