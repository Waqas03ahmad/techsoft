import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  tableButton: false,
};

const toggle = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.open = true;
    },
    toggleclose: (state) => {
      state.open = false;
    },
    tableButtonOpen: (state) => {
      state.tableButton = true;
    },
    tableButttonClosed: (state) => {
      state.tableButton = false;
    },
  },
});

export const {
  toggleDrawer,
  toggleclose,
  tableButtonOpen,
  tableButttonClosed,
} = toggle.actions;

export default toggle.reducer;
