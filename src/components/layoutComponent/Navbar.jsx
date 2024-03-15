import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 20px",
        background: "black",
        color: "white",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}>
      <Link to="user">
        {" "}
        <Avatar
          style={{
            backgroundColor: "#1876FD",
          }}
          icon={<UserOutlined />}
        />
      </Link>
    </Header>
  );
};

export default Navbar;
