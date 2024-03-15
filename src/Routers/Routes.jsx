import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import User from "../Pages/UserPage/User";
import Team from "../Pages/TeamPage/Team";
import Setting from "../Pages/SettingPage/Setting";
import Files from "../Pages/FilesPage/Files";
import TaskListPage from "../Pages/TaskListPage/TaskListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <TaskListPage />,
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
