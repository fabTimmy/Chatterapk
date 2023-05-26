import React from "react";
import PageNotFound from "../ErrorPage/PageNotFound";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import LoggedOut from './LoggedOut'
import Home from "./Home";
import { Routes, Route } from "react-router-dom";


const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/logged-out" element={<LoggedOut />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Pages;
