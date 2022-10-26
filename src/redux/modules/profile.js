import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/apis";

/** userId를 받아와서 해당 유저의 질문글들을 조회하는 함수 */
export const profileQuestions = createAsyncThunk(
  "profile/questions",
  async (payload, thunkApi) => {
    try {
      const { data } = await api.get(`qnas/users/${payload}`);

      return thunkApi.fulfillWithValue(data.data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

/** userId를 받아와서 그 유저가 남긴 답변글들을 조회하는 함수 */
export const profileAnswers = createAsyncThunk(
  "profile/answers",
  async (payload, thunkApi) => {
    try {
      const { data } = await api.get(`answers/users/${payload}`);

      return thunkApi.fulfillWithValue(data.data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

/** profile 유저 조회 */
export const profileUser = createAsyncThunk(
  "profile/user",
  async (payload, thunkApi) => {
    try {
      const { data } = await api.get(`users/${payload}`);
      return thunkApi.fulfillWithValue(data.data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
const initialState = {
  questions: [],
  answers: [],
  user: {},
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [profileQuestions.pending]: (state, action) => {
      state.isLoading = true;
    },
    [profileQuestions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.questions = action.payload;
    },
    [profileQuestions.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [profileAnswers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [profileAnswers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.answers = action.payload;
    },
    [profileAnswers.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    [profileUser.pending]: (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
    },
    [profileUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [profileUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default profileSlice.reducer;
