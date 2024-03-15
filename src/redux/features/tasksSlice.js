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
        status: "pending",
        id: Date.now(),
        created_at: createdAt,
      });
      localStorage.setItem("tasksSlice", JSON.stringify(state.tasks));
    },
    deleteTask: (state, { payload }) => {
      state.tasks.filter((task) => task.id !== payload);
      localStorage.setItem("tasksSlice", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
