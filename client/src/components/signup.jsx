import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:500/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful response,  
      setMessage(response.data.message);
      navigate("/login"); // Navigate to the login page
    } catch (error) {
      // Handle error response,  
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="center">
      <div className="container">
        <div className="text">Signup Form</div>
        {message && <div className="response-popup">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="data">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="data">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="data">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="data">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Signup</button>

          <div className="login-link">
            Already a member? <NavLink to="/login">Login now</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
