import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import AnswerList from "../components/Question/AnswerList";
import QContainer from "../components/Question/QContainer";
import Button from "../elem/Button";
import { FlexBetweenBox } from "../styles/flex";
import AnswerSvg from "../styles/svg/AnswerSvg";
function QuestionDetail() {

  return (
    <Layout>
      <Wrapper as="main">
        <QContainer />
        <AnswerContainer>
          <AnswerBtn>
            <span>여러분의 답변이 김지식님에게 큰 도움이 됩니다.</span>
            <Link>
              <Button {...btnStyle}>답변하기</Button>
            </Link>
          </AnswerBtn>
          <AnswerOptions>
            <ul>
              <li>
                <AnswerSvg />
                <span>
                  <strong>3</strong>개
                </span>
              </li>
            </ul>
          </AnswerOptions>
          <AnswerList />
        </AnswerContainer>
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

const Wrapper = styled.div`
  background-color: #f4f5f6;
  width: 90%;
  margin: 0 auto;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;
const AnswerBtn = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  margin-top: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${FlexBetweenBox};
  padding: 1rem 2.5rem;
  span {
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }
`;
const AnswerOptions = styled.div`
  padding: 2rem 2rem 1rem 2rem;

  ul {
    ${FlexBetweenBox}
    li {
      display: flex;
      align-items: center;

      svg {
        width: 1rem;
        color: #7298ff;
        margin-right: 0.8rem;
      }
      span {
        font-weight: 500;
        font-size: 0.95rem;
        color: rgba(0, 0, 0, 0.8);
        strong {
          font-weight: 600;
          margin-right: 0.1rem;
        }
      }
    }
  }
`;
