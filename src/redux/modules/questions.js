import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/questions";

const initialState = {
  questions: [],
  formdatas: [],
  isLoding: false,
  error: null,
};

export const addQuestion = createAsyncThunk(
  "questions/addQuestion",
  async (payload, thunkApi) => {
    try {
      console.log(payload);
      const { data } = await axios.post(BASE_URL, payload);
      console.log(data);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const readQuestions = createAsyncThunk(
  "questions/readQuestions",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post(BASE_URL);
      console.log(data)
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);


const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: {
    [addQuestion.pending]: (state) => {
      state.isLoding = true;
    },
    [addQuestion.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.questions.push(action.payload);
    },
    [addQuestion.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
    [readQuestions.pending]: (state) => {
      state.isLoding = true;
    },
    [readQuestions.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.questions = action.payload;
    },
    [readQuestions.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
  },
});

export default questionsSlice.reducer;
