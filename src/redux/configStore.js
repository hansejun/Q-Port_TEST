import { configureStore } from "@reduxjs/toolkit";
import questions from "./modules/questions";
import answers from "./modules/answers";
import users from "./modules/loginUser";
import profile from "./modules/profile";
const store = configureStore({
  reducer: { questions, answers, users, profile },
});

export default store;
