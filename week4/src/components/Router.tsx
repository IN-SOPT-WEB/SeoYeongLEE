import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Finder from "./Finder";
import Profile from "./Profile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Finder />} />
        <Route path="/search/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
