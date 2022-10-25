import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/questions";

/** userId를 받아와서 해당 유저의 질문글들을 조회하는 함수 */
export const readUserQuestions = createAsyncThunk(
  "questions/readQuestions",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}?userId=${payload}`);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

/** questionId를 받아와서 해당 질문글을 조회하는 함수 */
export const readQuestion = createAsyncThunk(
  "questions/readQuestion",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${payload}`);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

const initialState = {
  questions: [],
  question: {},
  isLoading: false,
  error: null,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: {
    [readUserQuestions.pending]: (state, action) => {
      state.isLoading = true;
    },
    [readUserQuestions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.questions = action.payload;
    },
    [readUserQuestions.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [readQuestion.pending]: (state, action) => {
      state.isLoading = true;
    },
    [readQuestion.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.question = action.payload;
    },
    [readQuestion.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default questionsSlice.reducer;
