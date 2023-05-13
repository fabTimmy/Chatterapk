import React from "react";
import { NavLink } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillChatTextFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsFillPostcardFill } from "react-icons/bs";

const Nav = () => {
  return (
    <nav>
      <div className="navBarSection">
        <div className="right">
          <NavLink to="/" className='navlinks'>Home</NavLink>
          <NavLink to="/team">
            <BsFillChatTextFill className="google" />
          </NavLink>
          <NavLink to="/signin">
            <BsFillPostcardFill className="google" />
          </NavLink>
          <NavLink to="/settings">
            <IoSettingsSharp className="google" />
          </NavLink>
          <NavLink to="/signin">
            <CgProfile className="google" />
            <div class="dropup">
              <div class="dropup-content">
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/settings'}>Settings</NavLink>
                <NavLink to={'/forget-password'}>Change Password</NavLink>
                <NavLink to={'/loggedout'}>Sign out</NavLink>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
