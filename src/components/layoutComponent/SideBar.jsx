import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { LuListTodo } from "react-icons/lu";

import { FileOutlined, TeamOutlined } from "@ant-design/icons";
import { IoSettingsOutline } from "react-icons/io5";

import todoLogo from "../../assets/to-do-list.png";
import { Link } from "react-router-dom";
const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = (value) => {
    setCollapsed(value);
  };

  const items = [
    { key: "1", icon: <LuListTodo />, label: "TaskList", link: "/" },
    ,
    {
      key: "2",
      icon: <TeamOutlined />,
      label: "Team",
      link: "/team",
    },
    { key: "3", icon: <FileOutlined />, label: "Files", link: "/files" },
    {
      key: "4",
      icon: <IoSettingsOutline />,
      label: "Setting",
      link: "/setting",
    },
  ];
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={handleCollapse}
      style={{ background: "black" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          padding: "5px 10px 30px 10px",

          alignItems: "center",
          gap: "5px",
        }}>
        <img src={todoLogo} alt="" width={50} />
        <p style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>
          App
        </p>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ background: "black" }}>
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}> {item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideBar;
