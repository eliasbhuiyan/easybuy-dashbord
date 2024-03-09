import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { jwtDecode } from "jwt-decode";
const Layout = () => {
  const token = document.cookie;
  const decoded = jwtDecode(token);
  return decoded?.role == "admin" || decoded?.role == "merchant" ? (
    <div className="flex">
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
