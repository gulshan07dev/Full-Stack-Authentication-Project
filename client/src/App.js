import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import Welcome from "./components/welcome";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
