import { FaChartPie, FaBox } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { FaBarsStaggered } from "react-icons/fa6";

import { Button, Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  getItem("Dashbord", "sub1", <FaChartPie className="text-brand text-xl" />, [
    getItem("Chart", "/"),
    getItem("Merchant", "merchant"),
    getItem("Customer List", "customers"),
    getItem("Order Management", "order"),
    getItem("Chat", "chat"),
  ]),
  {
    type: "divider",
  },
  getItem("Catagory", "catagory", <BiCategoryAlt />, [
    getItem("Create Catagory", "catagory"),
    getItem("All Catagory", "allcatagory"),
  ]),
  {
    type: "divider",
  },
  getItem("Product", "sub3", <FaBox />, [
    getItem("Create Product", "product"),
    getItem("All Products", "allproduct"),
  ]),
  {
    type: "divider",
  },
];
const Navbar = () => {
  const user = useSelector((state) => state.user_sec.user);
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
  return (
    <div className="w-fit flex flex-col py-5 z-50 h-screen bg-white sticky top-0 left-0 overflow-y-scroll">
      <div
        className={
          collapsed
            ? "flex flex-col items-center justify-between pb-5 px-2"
            : "flex items-center justify-between pb-5 px-2"
        }
      >
        <h2 className="text-xl font-bold text-slate-800">EasyBuy</h2>
        {screenWidth > 768 && (
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
              width: "fit-content",
            }}
          >
            <FaBarsStaggered className="text-brand text-xl" />
          </Button>
        )}
      </div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        onClick={onClick}
        inlineCollapsed={collapsed}
        items={items}
        style={{ fontSize: "20px" }}
      />
      <Link
        to="/user"
        className="mt-auto py-3 flex justify-between items-center flex-wrap px-3 bg-primary"
      >
        {user.avatar ? (
          <img
            src="/404page.png"
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
    </div>
  );
};
export default Navbar;
