import React from "react";
import { Avatar, Button, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";
import todoLogo from "../../assets/to-do-list.png";
import { Grid } from "antd";
import SmallDeviceSidebar from "../layoutComponent/SideBar/SmallDeviceSidebar";
import { toggleSidebar } from "../../redux/features/sidebarSlice";
import { Space, Typography } from "antd";

const { Header } = Layout;
const { useBreakpoint } = Grid;
const { Text } = Typography;

const Navbar = () => {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.sidebar.visible);

  //sidebar toggle function
  const handleToggleDrawer = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: `${screens.xs ? "space-between" : "end"}`,
        alignItems: "center",
        padding: "0 20px",
        background: "black",
        color: "white",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}>
      {screens.xs && (
        <Button
          type="primary"
          shape="round"
          icon={<MenuOutlined />}
          onClick={handleToggleDrawer}
        />
      )}
      {screens.xs && (
        <Space align="center" gap={5}>
          <Image src={todoLogo} alt="App Logo" width={50} />
          <Text style={{ color: "white", fontWeight: 700, fontSize: "20px" }}>
            App
          </Text>
        </Space>
      )}
      <Link to="user">
        <Avatar
          style={{
            backgroundColor: "#1876FD",
          }}
          icon={<UserOutlined />}
        />
      </Link>

      {/* for small device */}
      <SmallDeviceSidebar visible={visible} toggleDrawer={handleToggleDrawer} />
    </Header>
  );
};

export default Navbar;
