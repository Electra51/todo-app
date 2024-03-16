import React, { useState } from "react";
import SmallDeviceSidebar from "./SmallDeviceSidebar";
import LargeDeviceSidebar from "./LargeDeviceSidebar";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const Sidebar = () => {
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {screens.xs ? (
        <SmallDeviceSidebar />
      ) : (
        <LargeDeviceSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      )}
    </>
  );
};
export default Sidebar;
