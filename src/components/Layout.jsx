import { Outlet, Navigate } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";
import Navbar from "./Navbar";
import { jwtDecode } from "jwt-decode";
import Calculator from "./Calculator";
import { useState } from "react";
const Layout = () => {
  const [show, setShow] = useState(false);
  const token = document.cookie;
  let decoded;
  if (token) {
    decoded = jwtDecode(token);
  } else {
    decoded = null;
  }
  return decoded?.role == "admin" || decoded?.role == "merchant" ? (
    <>
      <div className="flex">
        <Navbar />
        <Outlet />
      </div>
      <div className="calculator_btn">
        <FaCalculator onClick={() => setShow(!show)} className="inline-block" />
        <Calculator className={show ? "calculator_show" : "calculator_hide"} />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
