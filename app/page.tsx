"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import WhiteBoard from "./components/WhiteBoard";

export default function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/whiteboard" element={<WhiteBoard />} />
        </Routes>
      </Router>
    </>
  )

}