import React from "react";
import PageNotFound from "../ErrorPage/PageNotFound";
import Settings from "./Settings";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Dashboard from "./Dashboard";
import ForgetPassword from "./ForgetPassword";
import LoggedOut from './LoggedOut'
import { Routes, Route } from "react-router-dom";
const LazyHome = React.lazy(() => import("./Home"));

const Pages = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback="Loading">
            <LazyHome />
          </React.Suspense>
        }
        exact
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/logged-out" element={<LoggedOut />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Pages;
