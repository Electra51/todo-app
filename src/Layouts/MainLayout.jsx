import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "../components/layoutComponent/Navbar";
import FooterPart from "../components/layoutComponent/FooterPart";
import Sidebar from "../components/layoutComponent/SideBar/SideBar";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: 24, minHeight: 100 }}>
            <Outlet />
          </div>
        </Content>
        <FooterPart />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
