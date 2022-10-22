import styled from "styled-components";
import Item from "./Item";

function List({ isAnswer }) {
  return (
    <ListContainer>
      <ListHead isAnswer={isAnswer}>
        <span>제목</span>
        <span>상태</span>
        {isAnswer ? null : <span>답변</span>}
        <span>작성일</span>
      </ListHead>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
        <Item key={idx} isAnswer={isAnswer} />
      ))}
    </ListContainer>
  );
}

export default List;

const ListContainer = styled.div``;
const ListHead = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isAnswer ? "3fr 1fr 0.5fr" : "3fr 0.5fr 0.5fr 0.5fr"};
  padding: 1rem 2rem;
  justify-content: center;
  justify-items: center;
  span {
    font-weight: 500;
    font-size: 0.9rem;
  }

  span:first-child {
    justify-self: baseline;
  }
`;
