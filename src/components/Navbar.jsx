import {
  AppstoreOutlined,
  UserOutlined,
  CalculatorOutlined,
  CodeSandboxOutlined,
  ProductOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
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
    getItem("Chart", "1"),
    getItem("Customer List", "2"),
    getItem("Order Management", "3"),
    getItem("Emails", "4"),
  ]),
  {
    type: "divider",
  },
  getItem("Catagory", "sub2", <CodeSandboxOutlined />, [
    getItem("Create Catagory", "5"),
    getItem("Create SubCatagory", "6"),
  ]),
  {
    type: "divider",
  },
  getItem("Product", "sub3", <ProductOutlined />, [
    getItem("Create Product", "7"),
    getItem("All Products", "8"),
  ]),
  {
    type: "divider",
  },
  getItem("Marchant/Admin", "sub4", <ProductOutlined />, [
    getItem("User Name", "13", <UserOutlined />),
    getItem("Calculator", "14", <CalculatorOutlined />),
  ]),
  {
    type: "divider",
  },
];
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onClick = (e) => {
    console.log("click ", e);
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: "fit-content",
        height: "100vh",
        background: "#fff",
        boxShadow: "10px 0px 4px -7px rgba(0,0,0,0.1)",
        padding: "0 20px",
      }}
    >
      <div
        className={
          collapsed
            ? "flex flex-col py-5"
            : "flex items-center justify-between py-5"
        }
      >
        <h2 className="text-xl font-bold text-slate-800 w-full">EasyBuy</h2>
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
