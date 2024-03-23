import { Outlet, Navigate } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";
import Navbar from "./Navbar";
import Calculator from "./Calculator";
import { useState } from "react";
import { useSelector } from "react-redux";
const Layout = () => {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user_sec.user);

  return user?.role == "admin" || user?.role == "merchant" ? (
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
