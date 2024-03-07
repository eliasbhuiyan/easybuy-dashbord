import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Layout = () => {
  const [userRole, setUserRole] = useState("");
  const decodeToken = (token) => {
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  };

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("sec_token="))
    .split("=")[1];

  const decodedToken = decodeToken(token);
  return decodedToken.role == "admin" || decodedToken.role == "merchant" ? (
    <div className="flex">
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
