import React from "react";
import { Drawer, Image, Menu } from "antd";
import { LuListTodo } from "react-icons/lu";
import { FileOutlined, TeamOutlined } from "@ant-design/icons";
import { IoSettingsOutline } from "react-icons/io5";
import todoLogo from "../../../assets/to-do-list.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../../redux/features/sidebarSlice";
import { Space, Typography } from "antd";

const { Text } = Typography;

const SmallDeviceSidebar = () => {
  const visible = useSelector((state) => state.sidebar.visible);
  const dispatch = useDispatch();

  //sidebar toggle function
  const handleToggleDrawer = () => {
    dispatch(toggleSidebar());
  };

  const items = [
    { key: "1", icon: <LuListTodo />, label: "TaskList", link: "/" },
    { key: "2", icon: <TeamOutlined />, label: "Team", link: "/team" },
    { key: "3", icon: <FileOutlined />, label: "Files", link: "/files" },
    {
      key: "4",
      icon: <IoSettingsOutline />,
      label: "Setting",
      link: "/setting",
    },
  ];

  return (
    <Drawer placement="left" onClose={handleToggleDrawer} visible={visible}>
      {/* project logo */}
      <Space align="center" style={{ padding: "5px 10px 30px 10px" }}>
        <Image src={todoLogo} alt="" width={50} />
        <Text strong style={{ color: "black", fontSize: "20px" }}>
          App
        </Text>
      </Space>
      {/* sidebar menu */}
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Drawer>
  );
};

export default SmallDeviceSidebar;
