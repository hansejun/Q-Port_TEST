import { configureStore } from "@reduxjs/toolkit";
import questions from "./modules/questions";
import answers from "./modules/answers";
import users from "./modules/loginUser";

const store = configureStore({
  reducer: { questions, answers, users },
});

export default store;
