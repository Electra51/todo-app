import React from "react";
import { Layout } from "antd";
import { HeartFilled } from "@ant-design/icons";
const { Footer } = Layout;

const FooterPart = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <span style={{ color: "#1876fd" }}>ToDo</span> app ©
      {new Date().getFullYear()} Created by Safayet{" "}
      <HeartFilled style={{ color: "red" }} />
    </Footer>
  );
};

export default FooterPart;
