import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasksSlice";
import sidebarSlice from "./features/sidebarSlice";

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    sidebar: sidebarSlice,
  },
});

export default store;
