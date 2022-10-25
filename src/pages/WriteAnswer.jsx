import Layout from "../components/Layout/Layout";
import Avatar from "@mui/material/Avatar";
/* import { useSelector } from "react-redux"; */
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from '../elem/Button';
import Container from '@mui/material/Container';


function WriteAnswer() {
  //content img 답변페이지에서 수정까지

  return (
    <Layout>
      <div>WriteAnswer</div>
      <Container fixed>
      <InfoGroup>
        <AvatarBox>
        <Avatar style={{ width: "80px", height: "80px" }} />
        {/* <InfoNickName></InfoNickName> */}
        <Question>
          
          <div>
          
          </div>
        </Question>
        </AvatarBox>
      </InfoGroup>
      </Container>
      <Write>
      <TextField
          inputProps={{ maxLength: "200" }}
          style={{
            width: "80%",
            marginLeft: "10%",
            marginTop: "5%"
          }}
          color=""
          id="outlined-multiline-static"
          label="답변"
          type="text"
          name="content"
          multiline
          rows={4}
          /* value={input.}
          onChange={onChange} */
          placeholder="답변을 200자 이내로 입력해주세요."
        />
        <Button {...btnStyle}>답변하기</Button>
      </Write>
    </Layout>
  );
}

export default WriteAnswer;

const InfoGroup = styled.div`
  /* background-color: green; */
  width: 80%;
  margin: 0 auto;
  height: 400px;
  padding: 100px;
`;

const AvatarBox = styled.div`
  /* background-color: red; */
  height:4.5rem;
`;

const InfoNickName = styled.div`
  /* background-color: red; */
  width: 6rem;
  height: 20px;
  margin-left: 5rem;
  text-align: center;
  margin-top: -50px;
`;

const Question = styled.div`
  /* background-color: teal; */
  width: 100%;
  height: 90px;
  margin-top : 5rem;
  display: flex;
  flex-direction: column;
`;

const Write = styled.div`
  /* background-color: teal; */
  width: 50%;
  height: 250px;
  margin: 0 auto;
`;

const btnStyle = {
  _bgColor: "#7298FF",
  _hoverBgColor: "#4f7dfe",
  borderRadius: "0",
};
