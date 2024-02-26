import {
  AppstoreOutlined,
  UserOutlined,
  CalculatorOutlined,
  CodeSandboxOutlined,
  ProductOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  getItem("Dashbord", "sub1", <AppstoreOutlined />, [
    getItem("Chart", "chart"),
    getItem("Customer List", "customers"),
    getItem("Order Management", "order"),
    getItem("Emails", "emails"),
  ]),
  {
    type: "divider",
  },
  getItem("Catagory", "sub2", <CodeSandboxOutlined />, [
    getItem("Create Catagory", "catagory"),
    getItem("Create SubCatagory", "subcatagory"),
  ]),
  {
    type: "divider",
  },
  getItem("Product", "sub3", <ProductOutlined />, [
    getItem("Create Product", "product"),
    getItem("All Products", "allproducts"),
  ]),
  {
    type: "divider",
  },
  getItem("@UserName", "user", <UserOutlined />),
  {
    type: "divider",
  },
  getItem(
    "Tools",
    "tls",
    null,
    [
      getItem("Calculator", "calculator", <CalculatorOutlined />),
      getItem("Calendar", "/calandar", <CalendarOutlined />),
    ],
    "group"
  ),
];
const Navbar = () => {
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
    console.log(e.key);
    navigate(e.key);
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="z-50 h-screen w-[120px] lg:w-auto bg-white sticky top-0 left-0 overflow-y-scroll">
      <div
        className={
          collapsed
            ? "flex flex-col items-center justify-between py-5 px-2"
            : "flex items-center justify-between py-5 px-2"
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
            {collapsed ? (
              <MenuUnfoldOutlined className="text-black" />
            ) : (
              <MenuFoldOutlined className="text-black" />
            )}
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
    </div>
  );
};
export default Navbar;
