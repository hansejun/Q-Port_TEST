import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../shared/apis";

const BASE_URL = "http://localhost:3001";
//onst BASE_URL = "http://43.201.84.98/";

/** user를 추가하는 요청 */
export const addUser = createAsyncThunk(
  "users/addUser",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users`, payload);
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

// 사용 x
export const readUser = createAsyncThunk(
  "users/readUser",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/users?email=${payload.email}&password=${payload.password}`
      );
      return thunkApi.fulfillWithValue(data.data.user);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const readProfileUser = createAsyncThunk(
  "users/readProfileUser",
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
  users: [],
  user: {},
  profile: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
    [readUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    [readProfileUser.fulfilled]: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { getUser } = usersSlice.actions;
export default usersSlice.reducer;
