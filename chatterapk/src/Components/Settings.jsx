import React from "react";
import Nav from "./Nav";
import { CiEdit } from "react-icons/ci";

const Settings = () => {
  return (
    <div className="settings">
      <header>
        <h1>Settings</h1>
        <CiEdit className="edit" />
      </header>
      <div className="settings-cont">
        <div className="settings-cont-1">
          <img src="/chatterapk/public/logo192.png" alt="logo" />
          <div className="dropdown">
            <select name="status" id="status">
              <option value="active">Active</option>
              <option value="away">Away</option>
              <option value="do-not-disturb">Do not Disturb</option>
            </select>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Settings;
