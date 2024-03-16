import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      const createdAt = new Date();
      state.tasks.push({
        ...payload,
        status: "Not Completed",
        id: Date.now(),
        created_at: createdAt,
      });
      localStorage.setItem("tasksSlice", JSON.stringify(state.tasks));
    },
    deleteTask: (state, { payload }) => {
      state.tasks.filter((task) => task.id !== payload);
      localStorage.setItem("tasksSlice", JSON.stringify(state.tasks));
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
    },
  },
});

export const { addTask, deleteTask, updateStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
