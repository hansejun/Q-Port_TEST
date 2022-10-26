import styled from "styled-components";
import AnswerItem from "./AnswerItem";
import UseUser from "../hooks/useUser";
function AnswerList({ answers, selectedId, ownerId }) {
  const user = UseUser();
  let newAnswers = [];
  console.log(answers);
  answers?.forEach((answer) =>
    answer.answerId === selectedId
      ? newAnswers.unshift(answer)
      : newAnswers.push(answer)
  );

  return (
    <Wrapper as="section">
      {answers?.map((answer, idx) => (
        <AnswerItem
          key={answer.answerId}
          answer={answer}
          selectedId={selectedId}
          user={user}
          ownerId={ownerId}
        />
      ))}
    </Wrapper>
  );
}
export default AnswerList;

const Wrapper = styled.div``;
