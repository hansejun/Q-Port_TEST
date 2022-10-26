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
      state.user = action.payload;
    },
  },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { getUser } = usersSlice.actions;
export default usersSlice.reducer;
