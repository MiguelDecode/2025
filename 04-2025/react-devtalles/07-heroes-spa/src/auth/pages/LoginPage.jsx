import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Miguel Decode");

    console.log(lastPath);
    setTimeout(() => {
      navigate(lastPath, { replace: true });
    }, 100);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
