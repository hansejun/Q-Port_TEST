import styled from "styled-components";
import Button from "../../elem/Button";
import { FlexBetweenBox, Flexbox } from "../../styles/flex";
import HeartSvg from "../../styles/svg/HeartSvg";
import CommentSvg from "../../styles/svg/CommentSvg";
import { Link } from "react-router-dom";

function AnswerItem() {
  return (
    <ItemBox>
      <ItemUser>
        <span>
          <Link to={"/profile/1"}>박지식</Link>님의 답변
        </span>
        <div className="img" />
      </ItemUser>
      <ItemContent>
        <p>
          그건 이렇게 하시면 됩니다!!!그건 이렇게 하시면 됩니다!!!그건 이렇게
          하시면 됩니다!!!그건 이렇게 하시면 됩니다!!!그건 이렇게 하시면
          됩니다!!!그건 이렇게 하시면 됩니다!!!그건 이렇게 하시면 됩니다!!!
        </p>
        <div className="img">이미지</div>
        <span>20분 전</span>
      </ItemContent>
      <ItemBtns>
        <div>
          <span>
            <HeartSvg /> 3
          </span>
          <span>
            <CommentSvg /> 2
          </span>
        </div>
        <Button {...btnStyle}>채택하기</Button>
      </ItemBtns>
    </ItemBox>
  );
}
export default AnswerItem;

const btnStyle = {
  _bgColor: "#7298FF",
  _hoverBgColor: "#4f7dfe",
  borderRadius: "0",
};

const ItemBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
  background-color: ${(props) => props.theme.bgColor};
  margin-bottom: 2rem;
`;
const ItemUser = styled.div`
  ${FlexBetweenBox}
  padding: 1rem 2rem;
  margin: 0 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  span {
    color: rgba(0, 0, 0, 0.7);
    a {
      font-size: 1rem;
      color: ${(props) => props.theme.fontColor};
      margin-right: 0.1rem;
    }
    font-size: 0.9rem;
    font-weight: 600;
  }
  div {
    width: 3rem;
    aspect-ratio: 1/1;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 2rem 2rem;
  font-size: 0.9rem;
  line-height: 1.8;
  div {
    ${Flexbox}
    width: 40%;
    aspect-ratio: 1/1;
    background-color: rgba(0, 0, 0, 0.2);
    margin-top: 2rem;
  }
  span {
    margin-top: 2rem;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const ItemBtns = styled.div`
  ${FlexBetweenBox}
  align-items: center;
  padding: 1rem 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    span {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      svg {
        width: 1rem;
        margin-right: 0.3rem;
      }
    }
  }
`;
