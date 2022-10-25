import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const BASE_URL = "http://localhost:3001/answers";

/** questionId를 받아와서 그 질문에 대한 답변글들을 조회하는 함수 */
export const readAnswers = createAsyncThunk(
  "answers/readAnswers",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}?questionId=${payload}`);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

/** userId를 받아와서 그 유저가 남긴 답변글들을 조회하는 함수 */
export const readUserAnswers = createAsyncThunk(
  "answers/readAnswers",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}?userId=${payload}`);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

const initialState = {
  answers: [],
  answer: {},
  isLoading: false,
  error: null,
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {},
  extraReducers: {
    [readAnswers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [readAnswers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.answers = action.payload;
    },
    [readAnswers.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    [readUserAnswers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [readUserAnswers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.answers = action.payload;
    },
    [readUserAnswers.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export default answersSlice.reducer;
