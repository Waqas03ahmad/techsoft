import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  tableButton: false,
};

const toggle = createSlice({
  name: "counter",
  initialState,
  reducers: {
    viewOpen: (state) => {
      state.open = true;
    },
    viewClose: (state) => {
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

export const { viewOpen, viewClose, tableButtonOpen, tableButttonClosed } =
  toggle.actions;

export default toggle.reducer;
