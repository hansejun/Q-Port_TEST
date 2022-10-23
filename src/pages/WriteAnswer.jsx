import Layout from "../components/Layout/Layout";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import styled from "styled-components";

function WriteAnswer() {
  const Q = useSelector((state) => state.questions.users);

  return (
    <Layout>
      <div>WriteAnswer</div>
      <InfoGroup>
        <Avatar style={{ width: "80px", height: "80px" }} />
        <InfoNickName>{Q[0].nickname}</InfoNickName>
      </InfoGroup>
      <div>{Q[0].title}</div>
    </Layout>
  );
}

export default WriteAnswer;

const InfoGroup = styled.div`
  padding: 100px;
`;

const InfoNickName = styled.div`
  background-color: green;
  width: 100px;
  height: 30px;
  text-align: center;
  margin-top: 10px;
`;
