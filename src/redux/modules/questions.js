import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  users: [
    {
      questionId: 1,
      userId:1,
      nickname: "원선",
      title: "잠이란 무엇인가요?",
      content: "잠을 꼭 자야하나요? 잠을 안자면 인체에 어떤 영향을 미치죠?",
      count: "15"
    },
    {
      questionId: 1,
      userId:1,
      nickname: "원선",
      title: "잠이란 무엇인가요?",
      content: "잠을 꼭 자야하나요? 잠을 안자면 인체에 어떤 영향을 미치죠?",
      count: "15"
    },
    {
      questionId: 1,
      userId:1,
      nickname: "원선",
      title: "잠이란 무엇인가요?",
      content: "잠을 꼭 자야하나요? 잠을 안자면 인체에 어떤 영향을 미치죠?",
      count: "15"
    },
    {
      questionId: 1,
      userId:1,
      nickname: "원선",
      title: "잠이란 무엇인가요?",
      content: "잠을 꼭 자야하나요? 잠을 안자면 인체에 어떤 영향을 미치죠?",
      count: "15"
    },
    {
      questionId: 1,
      userId:1,
      nickname: "원선",
      title: "잠이란 무엇인가요?",
      content: "잠을 꼭 자야하나요? 잠을 안자면 인체에 어떤 영향을 미치죠?",
      count: "15"
    },
    {
      questionId: 1,
      userId:1,
      nickname: "원선",
      title: "잠이란 무엇인가요?",
      content: "잠을 꼭 자야하나요? 잠을 안자면 인체에 어떤 영향을 미치죠?",
      count: "15"
    },
    {
      questionId: 1,
      userId:1,
      nickname: "원선",
      title: "잠이란 무엇인가요?",
      content: "잠을 꼭 자야하나요? 잠을 안자면 인체에 어떤 영향을 미치죠?",
      count: "15"
    },
    {
      questionId: 1,
      userId:1,
      nickname: "원선",
      title: "잠이란 무엇인가요?",
      content: "잠을 꼭 자야하나요? 잠을 안자면 인체에 어떤 영향을 미치죠?",
      count: "15"
    }

  ]
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extrareducers: {},
});

export default questionsSlice.reducer;
