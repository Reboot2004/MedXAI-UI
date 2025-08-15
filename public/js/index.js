import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import Segmentation from "views/Segmentation.js";
import ProfilePage from "views/examples/ProfilePage.js";
import LandingPage from "views/examples/LandingPage";
import UserManual from "views/UserManual";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/segmentation" element={<Segmentation />} />
      <Route path="/usermanual" element={<UserManual />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/about" element={<LandingPage />} />

      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
