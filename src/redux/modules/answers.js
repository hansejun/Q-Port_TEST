import instance, { api } from "../../shared/apis";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// patch 요청 put으로 수정해야함!

/** questionId를 받아와서 그 질문에 대한 답변글들을 조회하는 함수 */
export const readAnswers = createAsyncThunk(
  "answers/readAnswers",
  async (payload, thunkApi) => {
    try {
      const { data } = await api.get(`answers/${payload}`);

      return thunkApi.fulfillWithValue(data.data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

/** questionId를 받아와서 answers를 조회하는 함수 */
export const addAnswer = createAsyncThunk(
  "answers/addAnswer",
  async (payload, thunkApi) => {
    try {
      const { data } = await instance.post(
        `answers/${payload.id}`,
        payload.body
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

// answerId를 받아와서 수정하는 함수 (보류 )
export const editAnswer = createAsyncThunk(
  "answers/editAnswer",
  async (payload, thunkApi) => {
    try {
      await instance.put(`answers/${payload.id}`, payload.body);
      return thunkApi.fulfillWithValue(payload);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

// answerId를 받아와서 삭제하는 함수
export const removeAnswer = createAsyncThunk(
  "answers/removeAnswer",
  async (payload, thunkApi) => {
    try {
      await instance.delete(`answers/${payload}`);
      return thunkApi.fulfillWithValue(payload);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

const initialState = {
  answers: [],
  answer: {},
  isLoading: true,
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
      state.isLoading = false;
      state.error = action.payload;
    },
    [addAnswer.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addAnswer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.answers.push(action.payload);
    },
    [addAnswer.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    // [editAnswer.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [editAnswer.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   const target = state.answers.findIndex(
    //     (answer) => answer.id === action.payload.id
    //   );
    //   //state.answers[target] = action.payload;
    // },
    // [editAnswer.rejected]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = action.payload;
    // },
    [removeAnswer.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeAnswer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.answers = state.answers.filter(
        (answer) => answer.id !== action.payload
      );
    },
    [removeAnswer.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export default answersSlice.reducer;
