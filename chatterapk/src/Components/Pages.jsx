import React from "react";
import PageNotFound from "../ErrorPage/PageNotFound";
import Settings from "./Settings";
import { Routes, Route } from "react-router-dom";
const LazyHome = React.lazy(() => import("./Home"));
const LazySignin = React.lazy(() => import("./Auth/SignIn"));
const LazySignup = React.lazy(() => import("./Auth/SignUp"));
const LazyDashboard = React.lazy(() => import("./Dashboard"));
const LazyForgetpassword = React.lazy(() => import("./ForgetPassword"));
const LazyLoggedout = React.lazy(() => import("./LoggedOut"));

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

      <Route
        path="/signin"
        element={
          <React.Suspense fallback="Loading">
            <LazySignin />
          </React.Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <React.Suspense fallback="Loading">
            <LazySignup />
          </React.Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <React.Suspense fallback="Loading">
            <LazyDashboard />
          </React.Suspense>
        }
      />
      <Route
        path="/forget-pass"
        element={
          <React.Suspense fallback="Loading">
            <LazyForgetpassword />
          </React.Suspense>
        }
      />
      <Route
        path="/logged-out"
        element={
          <React.Suspense fallback="Loading">
            <LazyLoggedout />
          </React.Suspense>
        }
      />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Pages;
