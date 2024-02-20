import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex gap-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
