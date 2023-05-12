import React from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {IoSettingsSharp} from 'react-icons/io5'
import {BsFillChatTextFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

const Nav = () => {
  return (
    <nav>
      <div className="navBarSection">
        <div className="right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/team"><BsFillChatTextFill className="google"/></NavLink>
          <NavLink to="/signin"><FcGoogle className="google" /></NavLink>
          <NavLink to="/settings"><IoSettingsSharp className="google" /></NavLink>
          <NavLink to="/signin"><CgProfile className="google" /></NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
