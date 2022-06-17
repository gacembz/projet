import React from "react";

import { Navigate } from "react-router-dom";

const Prodactroute = ({ children }) => {
  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {token && user.role == "prodact" ? children : <Navigate to="/" />}
    </div>
  );
};

export default Prodactroute;