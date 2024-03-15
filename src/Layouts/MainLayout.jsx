import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import SideBar from "../components/layoutComponent/SideBar";
import Navbar from "../components/layoutComponent/Navbar";
import FooterPart from "../components/layoutComponent/FooterPart";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
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
