import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

export default function Welcome() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:500/check-auth", {
          withCredentials: true,
        });
        setUsername(response.data.name); // Update the username state
      } catch (error) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:500/logout", { withCredentials: true });
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Welcome, {username}!</h1>
      <p>You are successfully logged in!</p>
      <button className="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
