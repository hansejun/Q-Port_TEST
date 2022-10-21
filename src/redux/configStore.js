import { configureStore } from "@reduxjs/toolkit";
import questions from "./modules/questions";
const store = configureStore({
  reducer: { questions },
});

export default store;
