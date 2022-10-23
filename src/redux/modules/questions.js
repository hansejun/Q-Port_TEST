import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      questionId: 1,
      userId:Date.now(),
      nickname: "원선",
      title: "잠이란 무엇인가요?잠이란 무엇인가요?잠이란 무엇인가요?잠이란 무엇인가요?잠이란 무엇인가요?",
      content: "",
      count: "15" // 텍스트 40자 제한 
    },
    {
      questionId:2,
      userId:Date.now(),
      nickname:"준혁",
      title: "FE분들이랑 어떻게 해야 협업을 잘 할까요?",
      content: "",
      count: "12"
    },
    {
      questionId:3,
      userId:Date.now(),
      nickname: "용호",
      title: "BE인데 FE배워서 풀스택하고 싶습니다. 뭐부터 공부해야 하나요?",
      content: "",
      count: "8"
    },
    {
      questionId:4,
      userId:Date.now(),
      nickname:"세준",
      title:"FE 면접 질문 100문100답 좋은 답변 채택하겠습니다!",
      content: "",
      count:"13"
    },
    {
      questionId:5,
      userId:Date.now(),
      nickname:"민기",
      title:"프론트엔드 어떻게 하면 잘할 수 있을까요?",
      content: "",
      count:"10"
    },
    {
      questionId:6,
      userId:Date.now(),
      nickname:"민기",
      title:"testtesttesttesttesttesttesttesttesttesttesttest",
      content: "",
      count:"10"
    },
    {
      questionId:7,
      userId:Date.now(),
      nickname:"민기",
      title:"testtesttesttesttesttesttesttesttesttesttesttest",
      content: "",
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
