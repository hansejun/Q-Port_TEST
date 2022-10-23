import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { readQuestion } from "../../redux/modules/questions";
import { Flexbox } from "../../styles/flex";
import QuestionSvg from "../../styles/svg/QuestionSvg";
function QContainer() {
  const { question } = useSelector((state) => state.questions);
  console.log(question);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readQuestion(+id));
  }, [id, dispatch]);

  return (
    <Container as="section">
      <QHeader>
        <QuestionSvg />
        <div>
          <span>질문 올립니다.</span>
        </div>
      </QHeader>
      <QContent>
        <p>
          왜 일요일마다 WIL 쓰라고 하는거죠?왜 일요일마다 WIL 쓰라고 하는거죠?왜
          일요일마다 WIL 쓰라고 하는거죠?왜 일요일마다 WIL 쓰라고 하는거죠?왜
          일요일마다 WIL 쓰라고 하는거죠?왜 일요일마다 WIL 쓰라고 하는거죠?왜
          일요일마다 WIL 쓰라고 하는거죠?
        </p>
        {question?.imgUrl ? <img src={question.imgUrl} alt="" /> : null}
      </QContent>
      <QFooter>
        <Link to={"/profile/:id"}>
          <div />
          <span>김지식</span>
        </Link>
        <div>
          <span>2022.10.20</span>
          <span>답변수 2</span>
        </div>
      </QFooter>
    </Container>
  );
}
export default QContainer;

const Container = styled.div`
  padding: 2rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
`;

const QHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  svg {
    width: 2.5rem;
    color: #7298ff;
  }
  div:last-child {
    padding: 0.8rem 1rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;
const QContent = styled.div`
  p {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.8;
  }
  div {
    ${Flexbox}
    margin-top: 2rem;
    width: 30%;
    aspect-ratio: 1/1;
    background-color: rgba(0, 0, 0, 0.2);
  }
  img {
    margin-top: 2rem;
  }
`;

const QFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1rem 0;

  a {
    display: flex;
    align-items: center;
    div {
      width: 1.5rem;
      height: 1.5rem;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      margin-right: 0.4rem;
    }
    span {
      font-size: 0.8rem;
    }
    margin-right: 1rem;
  }
  div:last-child {
    display: flex;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    span:first-child {
      margin-right: 1rem;
    }
  }
`;
