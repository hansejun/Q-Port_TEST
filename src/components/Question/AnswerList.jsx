import styled from "styled-components";
import AnswerItem from "./AnswerItem";

function AnswerList() {
  return (
    <Wrapper as="section">
      <AnswerItem />
      <AnswerItem />
    </Wrapper>
  );
}
export default AnswerList;

const Wrapper = styled.div``;
