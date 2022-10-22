import styled from "styled-components";

function UserInfo() {
  return (
    <UserContainer as="section">
      <UserImg>
        <div />
      </UserImg>
      <UserInfos>
        <UserProfile>
          <span>김지식</span>
          <button>프로필 편집</button>
        </UserProfile>
        <UserLog>
          <span>
            질문 <Strong as="strong">21</Strong>
          </span>
          <span>
            답변 <Strong as="strong">5</Strong>
          </span>
        </UserLog>
        <UserDetail>
          <span>qwewqe@naver.com</span>
        </UserDetail>
      </UserInfos>
    </UserContainer>
  );
}

export default UserInfo;

const UserContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem 5rem;
  display: flex;
`;

const UserImg = styled.div`
  div {
    width: 8rem;
    height: 8rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
  margin-right: 6rem;
`;

const UserInfos = styled.div`
  padding: 0.8rem 0;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 1.3rem;
    font-weight: 400;
    margin-right: 1rem;
  }
  button {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0.3rem;
    font-weight: 500;
  }
  margin-bottom: 1rem;
`;
const UserLog = styled.div`
  display: flex;
  margin-bottom: 1rem;
  & > span {
    font-size: 0.9rem;
    margin-right: 1rem;
  }
`;
const UserDetail = styled.div`
  font-weight: 500;
`;
const Strong = styled.span`
  font-weight: 600;
  font-size: 1.05rem;
`;
