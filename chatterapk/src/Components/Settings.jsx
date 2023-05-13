import React from "react";
import Nav from "./Nav";
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CiEdit } from "react-icons/ci";

const Settings = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="settings">
      <header>
        <h2>Settings</h2>
        <CiEdit className="edit" />
      </header>
      <div className="settings-cont">
        <div className="settings-cont-1">
          <img src={user.photoURL} alt="logo" />
          <h1>{user.displayName}</h1>
          <div className="dropdown">
            <select name="status" id="status">
              <option value="active">Active</option>
              <option value="away">Away</option>
              <option value="do-not-disturb">Do not Disturb</option>
            </select>
          </div>
        </div>
        <div className="settings-cont-2">
         
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Settings;
