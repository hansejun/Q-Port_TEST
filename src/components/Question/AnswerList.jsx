import styled from "styled-components";
import AnswerItem from "./AnswerItem";

function AnswerList({ answers, selectedId }) {
  let newAnswers = [];
  answers.forEach((answer) =>
    answer.id === selectedId
      ? newAnswers.unshift(answer)
      : newAnswers.push(answer)
  );
  return (
    <Wrapper as="section">
      {newAnswers?.map((answer, idx) => (
        <AnswerItem key={idx} answer={answer} selectedId={selectedId} />
      ))}
    </Wrapper>
  );
}
export default AnswerList;

const Wrapper = styled.div``;
