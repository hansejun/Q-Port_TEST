import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://3.35.229.128/api/qnas";

export const readQuestions = createAsyncThunk(
  "questions/readQuestions",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(BASE_URL);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
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
  ok: true,
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
    [readQuestions.pending]: (state, action) => {
      state.isLoading = true;
    },
    [readQuestions.fulfilled]: (state, action) => {
      const { ok, data } = action.payload;
      state.isLoading = false;
      state.ok = ok;
      state.questions = data;
    },
    [readQuestions.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [readQuestion.pending]: (state, action) => {
      state.isLoading = true;
    },
    [readQuestion.fulfilled]: (state, action) => {
      const { ok, data } = action.payload;
      state.isLoading = false;
      state.ok = ok;
      state.question = data;
    },
    [readQuestion.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default questionsSlice.reducer;
