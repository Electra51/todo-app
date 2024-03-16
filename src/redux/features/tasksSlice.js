import { createSlice } from "@reduxjs/toolkit";

//using local storage to persist tasks even if the user refreshes the page
const tasksFromStorage = JSON.parse(localStorage.getItem("tasks")) || [];

const initialState = {
  tasks: tasksFromStorage,
  selectedPriority: "all",
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({
        ...payload,
        status: "Not Completed",
        id: Date.now(),
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setPriorityFilter: (state, { payload }) => {
      state.selectedPriority = payload;
    },
    updateTask: (state, { payload }) => {
      const index = state.tasks.findIndex((task) => task.id === payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...payload };
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateStatus,
  setPriorityFilter,
  updateTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
