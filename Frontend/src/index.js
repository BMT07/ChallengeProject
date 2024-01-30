
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import SignIn from "views/examples/SignIn";
import ActivationEmail from "views/examples/ActivationEmail";
import PrivateRoute from "views/examples/PrivateRoute";
import App from "App";
import Forum from "views/examples/Forum";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/index" element={<Index />} />
        </Route>
        <Route path="/nucleo-icons" element={<NucleoIcons />} />
        <Route element={<PrivateRoute />}>
          <Route path="/landing-page" element={<LandingPage />} />
        </Route>
        <Route path="/register-page" element={<RegisterPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile-page" element={<ProfilePage />} />
        </Route>
        <Route path="/activationemail/:activation_token" element={<ActivationEmail />} />
        <Route element={<PrivateRoute />}>
          <Route path="/forum" element={<Forum />} />
        </Route>
      </Route>

    </Routes>
  </BrowserRouter>
);
