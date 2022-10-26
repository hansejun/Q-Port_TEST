import styled from "styled-components";
import AnswerItem from "./AnswerItem";

function AnswerList({ answers, selectedId }) {
  let newAnswers = [];
  answers.forEach((answer) =>
    answer.answerId === selectedId
      ? newAnswers.unshift(answer)
      : newAnswers.push(answer)
  );
  return (
    <Wrapper as="section">
      {newAnswers?.map((answer, idx) => (
        <AnswerItem
          key={answer.answerId}
          answer={answer}
          selectedId={selectedId}
        />
      ))}
    </Wrapper>
  );
}
export default AnswerList;

const Wrapper = styled.div``;
