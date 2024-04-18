import { FaChartPie, FaBox, FaSignOutAlt } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { RiListUnordered } from "react-icons/ri";
import { FaUserSecret, FaBarsStaggered } from "react-icons/fa6";

import { Button, Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../reducer/userSlice";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Dashbord", "sub1", <FaChartPie className="navIcon" />, [
    getItem("Chart", "/"),
    getItem("Merchant", "merchant"),
    getItem("Chat", "chat"),
  ]),
  {
    type: "divider",
  },
  getItem("Customer", "sub5", <FaUserSecret className="navIcon" />, [
    getItem("Customer List / Details", "customerlist"),
  ]),
  {
    type: "divider",
  },
  getItem("Order", "sub4", <RiListUnordered className="navIcon" />, [
    getItem("Order List", "orderlist"),
    getItem("Order Details", "orderdetails"),
  ]),
  {
    type: "divider",
  },
  getItem("Catagory", "catagory", <BiCategoryAlt className="navIcon" />, [
    getItem("Create Catagory", "catagory"),
    getItem("All Catagory", "allcatagory"),
  ]),
  {
    type: "divider",
  },
  getItem("Product", "sub3", <FaBox className="navIcon" />, [
    getItem("Create Product", "product"),
    getItem("All Products", "allproduct"),
  ]),
  {
    type: "divider",
  },
  getItem("Accounts", "sub6", <FaBox className="navIcon" />, [
    getItem("Invoice", "invoice"),
    getItem("Invoice List", "invoicelist"),
  ]),
];
const Navbar = () => {
  const user = useSelector((state) => state.user_sec.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const screenWidth = window.innerWidth;
  useEffect(() => {
    if (screenWidth > 768) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, [screenWidth]);
  const onClick = (e) => {
    navigate(e.key);
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const name = user?.name;
  const firstName = name.substring(0, 1);
  const lastName = name.substring(name.indexOf(" ") + 1, name.indexOf(" ") + 2);
  const concatenated = firstName + lastName;

  const hendelSignOut = () => {
    document.cookie = `sec_token= null;`;
    dispatch(loggedUser(null));
  };
  return (
    <div
      className={`${
        collapsed ? "w-full md:w-fit" : "w-full md:w-[300px]"
      } sideNavbar justify-between md:justify-normal px-5 md:px-0 border-r-2 border-slate-400 rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl flex flex-wrap  md:flex-col pt-1.5 md:py-5 z-50 h-fit md:h-screen bg-brand fixed md:sticky top-0 left-0 md:overflow-y-scroll`}
    >
      <div
        className={
          collapsed
            ? "flex flex-col items-center justify-between pb-5 px-2"
            : "flex items-center justify-between pb-5 px-2"
        }
      >
        <div className="w-16">
          <img className="w-full" src="/logo.png" alt="logo" />
        </div>
        {screenWidth > 767 && (
          <Button
            className="text-white text-xl border-none"
            onClick={toggleCollapsed}
          >
            <FaBarsStaggered />
          </Button>
        )}
      </div>
      <div className="order-3 md:order-2 w-full flex justify-center">
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={screenWidth > 767 ? "inline" : "horizontal"}
          theme="light"
          onClick={onClick}
          inlineCollapsed={collapsed}
          items={items}
          style={{
            background: "#42B42F",
            margin: "0px",
            padding: "0px",
          }}
        />
      </div>
      <div className="order-2 md:order-3 flex flex-row md:flex-col items-center md:mt-auto">
        <Link
          to="/user"
          className=" md:py-3 flex md:gap-4 items-center flex-wrap px-3 md:bg-primary w-full"
        >
          {user?.avatar ? (
            <img
              src={user?.avatar}
              alt="user"
              className="w-10 h-10 rounded-full border"
            />
          ) : (
            <div className="w-10 h-10 border rounded-full bg-secondary flex justify-center items-center text-white">
              {concatenated}
            </div>
          )}
          {!collapsed && (
            <div>
              <h2 className="text-xl font-bold text-white">{user.name}</h2>
              <p className="text-brand capitalize">{user.role}</p>
            </div>
          )}
        </Link>
        <button
          onClick={hendelSignOut}
          className="w-full md:bg-primary text-white md:mt-2 md:py-3 flex gap-x-2 items-center focus:outline-none"
        >
          <button />
          <FaSignOutAlt />
          <span> Logout</span>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
