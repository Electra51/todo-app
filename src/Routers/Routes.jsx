import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/HomePage/Home";
import User from "../Pages/UserPage/User";
import Team from "../Pages/TeamPage/Team";
import Setting from "../Pages/SettingPage/Setting";
import Files from "../Pages/FilesPage/Files";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/files",
        element: <Files />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);
