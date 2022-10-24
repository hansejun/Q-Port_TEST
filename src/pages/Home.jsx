import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import mainbg from "../static/mainbg.png";
import lens from "../static/lens.png";
import me1 from "../static/memoji1.png";
import me2 from "../static/memoji2.png";
import me3 from "../static/memoji3.png";
import me4 from "../static/memoji4.png";
import me5 from "../static/memoji5.png";
import { Link } from "react-router-dom";


function Home() {
  const Q = useSelector((state) => state.questions.users);
  const counter = Q.map((search) => search.count);
  console.log("counter", counter);
  const Rank = counter.sort((a, b) => b - a);
  console.log("Rank", Rank);

  const backgroundArr = [me1, me2, me3, me4, me5];
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  const backgroundImg = backgroundArr[randomIndex];
  console.log(backgroundImg);

  

  return (
    <Layout>
      <Box>
        <RandomImg style={{ backgroundImage: `url(${backgroundImg})` }} />
      </Box>
      <Input type="search" placeholder="Search" />
      <Widgets>
        <Label>Qport Top 3</Label>
        <VerticalLine />
        <StyleLink to="/questions">
          <A>questions</A>
        </StyleLink>
        <StyleLink to="/questions/:questionId/write">
          <A>WriteAnswer</A>
        </StyleLink>
        <StyleLink to="/profile/edit">
          <A>ProfileEdit</A>
        </StyleLink>
      </Widgets>
      <Ranker>
        {Q.map((Q) => (
          <RankList>
            <Avatar
              style={{
                boxSizing: "border-box",
                width: 50,
                height: 50,
                backgroundColor: "#e9ecef",
                margin: "0 auto",
                marginTop: "30px",
              }}
              alt=" "
              src=" "
            />
            <NickName>{Q.nickname}</NickName>
          </RankList>
        ))}
      </Ranker>
    </Layout>
  );
}

export default Home;

// 배너박스
const Box = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 44px;
  width: 100%;
  height: 201px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("${mainbg}");
`;

// 랜덤 이미지
const RandomImg = styled.div`
  position: absolute;
  margin-top: 35px;
  width: 170px;
  height: 166px;
  margin-left: 55%;
`;

// 서치 인풋박스
const Input = styled.input`
  overflow: auto;
  border: none;
  margin-left: 25%;
  margin-top: 5%;
  width: 50%;
  height: 50px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.09);
  background-image: url("${lens}");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: left;
  background-position: 20px;
  text-align: left;
  padding-left: 3rem;
  img {
    position: absolute;
    left: 1rem;
  }
  &::placeholder {
    font-size: 15px;
    font-weight: bold;
    /*    text-indent:35px; */
  }
`;

// 위젯
const Widgets = styled.div`
  background-color: #000000;
  border: 1px solid black;
  width: 60%;
  padding: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  justify-content: space-evenly;
  margin-top: 5%;
`;

// 위젯 이너 라벨
const Label = styled.label`
  color: #d6d6d6;
`;

// 위젯 이너 버티컬 라인
const VerticalLine = styled.div`
  border-left: 1px solid #e9ecef;
  height: 50px;
`;

//  랭크 위치
const Ranker = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 80%;
  padding: 2.5%;
  margin: 0 auto;
  margin-top: 2%;
  display: flex;
`;

// 랭크 리스트
const RankList = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 150px;
  margin: 10px;
`;

// 닉네임
const NickName = styled.div`
  flex-wrap: wrap;
  margin-top: 10px;
  text-align: center;
`;

// Link 태그
const StyleLink = styled(Link)`
  text-decoration-line: none;
`;

// a 태그
const A = styled.a`
  color: #7f7f7f;
  text-decoration-line: none;
  &:hover {
    color: #ffffff;
  }
`;
