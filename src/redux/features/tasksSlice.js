import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({ ...payload, status: "pending", id: Date.now() });
      localStorage.setItem("tasksSlice", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
