import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      userId:0,
      nickname:"원선",
      title:"",
      content:"",
      count:"15"
    },
    {
      userId:0,
      nickname:"준혁",
      title:"",
      content:"",
      count:"12"
    },
    {
      userId:0,
      nickname:"용호",
      title:"",
      content:"",
      count:"8"
    },
    {
      userId:0,
      nickname:"세준",
      title:"",
      content:"",
      count:"13"
    },
    {
      userId:0,
      nickname:"민기",
      title:"",
      content:"",
      count:"10"
    },
  ]
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extrareducers: {},
});

export default questionsSlice.reducer;
