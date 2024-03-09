import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
const Layout = () => {
  const user = "admin";
  const [userRole, setUserRole] = useState("");
  const decodeToken = (token) => {
    if (!token) return null;
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  };

  const getCookie = () => {
    if (document.cookie.length > 0) {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("sec_token="))
        .split("=")[1];
      return token;
    }
  };

  // const token = document.cookie
  //   .split("; ")
  //   .find((row) => row.startsWith("sec_token="))
  //   .split("=")[1];
  const decodedToken = decodeToken(getCookie());
  return decodedToken?.role == "admin" || decodedToken?.role == "merchant" ? (
    <div className="flex">
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
