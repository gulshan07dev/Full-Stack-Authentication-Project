import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:500/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful response, e.g., show success message or redirect to another page
      setMessage(response.data.message);
      navigate("/welcome");
    } catch (error) {
      // Handle error response, e.g., show error message
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="center">
      <div className="container">
        <div className="text">Login Form</div>
        {message && <div className="response-popup">{message}</div>}
        <form onSubmit={handleSubmit}>
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

          <button type="submit">Login</button>

          <div className="signup-link">
            Not a member? <NavLink to="/signup">Signup now</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
