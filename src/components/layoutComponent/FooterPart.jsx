import React from "react";
import { Layout, Typography } from "antd";
import { HeartFilled } from "@ant-design/icons";

const { Footer } = Layout;
const { Text } = Typography;

const FooterPart = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <Text style={{ color: "#1876fd" }}>ToDo</Text> app ©
      {new Date().getFullYear()} Created by Safayet{" "}
      <HeartFilled style={{ color: "red" }} />
    </Footer>
  );
};

export default FooterPart;
