import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001";
//onst BASE_URL = "http://43.201.84.98/";

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

export const readUser = createAsyncThunk(
  "users/readUser",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/users?email=${payload.email}&password=${payload.password}`
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const readProfileUser = createAsyncThunk(
  "users/readProfileUser",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users/${payload}`);
      return thunkApi.fulfillWithValue(data);
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
      state.user = state.users.fillter((user) => user.id === action.payload);
    },
  },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
    [readUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [readProfileUser.fulfilled]: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export default usersSlice.reducer;
