import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasksSlice";

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
  },
});

export default store;
