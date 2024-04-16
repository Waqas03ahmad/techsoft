import { configureStore } from "@reduxjs/toolkit";
import toggle from "./ToggleStates";
const store = configureStore({
  reducer: {
    counter: toggle,
  },
});

export default store;
