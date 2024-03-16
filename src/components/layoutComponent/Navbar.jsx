// import React, { useState } from "react";
// import { Avatar, Button } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import { Layout } from "antd";
// import { Link } from "react-router-dom";
// import SmallDeviceSidebar from "../layoutComponent/SideBar/SmallDeviceSidebar";
// import { MenuOutlined } from "@ant-design/icons";
// import todoLogo from "../../assets/to-do-list.png";
// import { Grid } from "antd";

// const { Header } = Layout;
// const { useBreakpoint } = Grid;

// const Navbar = () => {
//   const screens = useBreakpoint();
//   const [visible, setVisible] = useState(false);

//   const toggleDrawer = () => {
//     setVisible(!visible);
//   };

//   return (
//     <Header
//       style={{
//         display: "flex",
//         justifyContent: `${screens.xs ? "space-between" : "end"}`,
//         alignItems: "center",
//         padding: "0 20px",
//         background: "black",
//         color: "white",
//         boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//       }}>
//       {screens.xs && (
//         <Button
//           type="primary"
//           shape="round"
//           icon={<MenuOutlined />}
//           onClick={toggleDrawer}
//         />
//       )}
//       {screens.xs && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "start",
//             alignItems: "center",
//             gap: "5px",
//           }}>
//           <img src={todoLogo} alt="" width={50} />
//           <p style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>
//             App
//           </p>
//         </div>
//       )}
//       <Link to="user">
//         <Avatar
//           style={{
//             backgroundColor: "#1876FD",
//           }}
//           icon={<UserOutlined />}
//         />
//       </Link>

//       {/* for small device */}
//       <SmallDeviceSidebar
//         visible={visible}
//         setVisible={setVisible}
//         toggleDrawer={toggleDrawer}
//       />
//     </Header>
//   );
// };

// export default Navbar;

// Navbar.js

import React from "react";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MenuOutlined } from "@ant-design/icons";
import todoLogo from "../../assets/to-do-list.png";
import { Grid } from "antd";
import SmallDeviceSidebar from "../layoutComponent/SideBar/SmallDeviceSidebar";
import { toggleSidebar } from "../../redux/features/sidebarSlice";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.sidebar.visible);

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
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "5px",
          }}>
          <img src={todoLogo} alt="" width={50} />
          <p style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>
            App
          </p>
        </div>
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
