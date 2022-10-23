import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import QContainer from "../components/Question/QContainer";
import Button from "../elem/Button";
import { FlexBetweenBox } from "../styles/flex";

function QuestionDetail() {
  return (
    <Layout>
      <Wrapper>
        <QContainer />
        <AnswerBtn>
          <span>여러분의 답변이 김지식님에게 큰 도움이 됩니다.</span>
          <Link>
            <Button {...btnStyle}>답변하기</Button>
          </Link>
        </AnswerBtn>
      </Wrapper>
    </Layout>
  );
}
export default QuestionDetail;

const btnStyle = {
  _bgColor: "#7298FF",
  _hoverBgColor: "#4f7dfe",
  borderRadius: "0",
};

const Wrapper = styled.div``;
const AnswerBtn = styled.div`
  margin-top: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  ${FlexBetweenBox}
  padding:1rem 2.5rem;
  span {
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }
`;
