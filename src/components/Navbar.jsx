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
  getItem(<h2>EasyBuy</h2>),
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
  getItem("Marchant/Admin"),
  {
    type: "divider",
  },
  getItem("User Name", "13", <UserOutlined />),
  getItem("Calculator", "14", <CalculatorOutlined />),
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
        width: 256,
        height: "100vh",
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? (
          <MenuUnfoldOutlined className="text-black" />
        ) : (
          <MenuFoldOutlined className="text-black" />
        )}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        onClick={onClick}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default Navbar;
