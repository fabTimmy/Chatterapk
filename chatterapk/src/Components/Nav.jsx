import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="navBarSection">
        <div className="left">
        </div>
        <div className="navBarToggler">
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>

        <div className="right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/signin">SignIn</NavLink>
        </div>
      </div>
      <div className="mobileNavBarContainer">
        <div className="top">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/signin">SignIn</NavLink>
        </div>
        </div>
    </nav>
  );
};

export default Nav;
