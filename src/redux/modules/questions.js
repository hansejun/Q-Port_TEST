import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extrareducers: {},
});

export default questionsSlice.reducer;
