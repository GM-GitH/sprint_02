import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogin = () => {
    return JSON.parse(localStorage.getItem("isLogin"));
  };

  return isLogin() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
