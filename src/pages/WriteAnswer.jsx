import Layout from "../components/Layout/Layout";
import Avatar from "@mui/material/Avatar";
/* import { useSelector } from "react-redux"; */
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "../elem/Button";
import Container from "@mui/material/Container";
import { addAnswer } from "../redux/modules/answers";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../shared/apis";

function WriteAnswer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [input, setInput] = useState({
    title: "",
    content: "",
    imgUrl: null,
  });
  const [file, setFile] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onChangePreView = (e) => {
    const formData = new FormData();
    const fileBlob = URL.createObjectURL(e.target.files[0]);
    setFile(fileBlob);
  };

  const onCreate = async (e) => {
    e.preventDefault();
    if (input.title === "") {
      return window.alert("질문의 제목을 입력해주세요!");
    } else if (input.title === "" || input.content === "") {
      return window.alert("모든 항목을 기입해주세요!");
    }
    await instance.post(`answers/${id}`, { ...input });

    setInput({ title: "", content: "", imgUrl: "" });
    navigate("/questions");
  };

  return (
    <Layout>
      <PageTitle>Answer Form</PageTitle>
      <Formlabel>답변 작성</Formlabel>
      <Line />
      <FormContainer onSubmit={onCreate}>
        <CreateTitle
          autoFocus
          type="text"
          name="title"
          onChange={onChange}
          value={input.title}
          placeholder="답변 제목"
          maxLength={40}
        />
        <div>
          <CreateContent
            type="text"
            name="content"
            onChange={onChange}
            value={input.content}
            placeholder="답변 내용"
            maxLength={200}
          />

          <Title>Upload Flie</Title>
          <FileBox file={file} setFile={setFile}>
            <FileCard>
              <FileInput>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={onChangePreView}
                  /* onClick={submitFileData} */
                />
                <button>
                  <i>
                    <AiOutlinePlus style={{}} />
                  </i>
                  Upload
                </button>
              </FileInput>
              <p>Support files</p>
              <p>JPG,PNG,GIF</p>
            </FileCard>
            <Img src={file} alt={""} />
          </FileBox>
        </div>
        <StyleButton>답변 추가</StyleButton>
      </FormContainer>
    </Layout>
  );
}

export default WriteAnswer;

const PageTitle = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 4rem;
  font-size: 4rem;
  font-weight: bold;
`;

const Formlabel = styled.div`
  margin-top: 1.5rem;
  width: 1000px;
  margin: 0 auto;
  padding: 1.75rem;
  font-size: 1.5rem;
`;

const Line = styled.div`
  width: 1000px;
  margin: 0 auto;
  border-bottom: 1px solid #e9ecef;
`;

const FormContainer = styled.form`
  position: relative;
  margin: 0 auto;
  width: 1000px;
  height: 800px;
`;

const CreateTitle = styled.input`
  border: 1px solid #e9ecef;
  width: 60%;
  height: 42px;
  margin: 50px;
  margin-bottom: 30px;
  padding: 8px 20px 8px 20px;
  border-radius: 0.2rem;
  font-size: 20px;
  font-weight: bold;
  cursor: text;
`;

const CreateContent = styled.textarea`
  border: 1px solid #e9ecef;
  width: 60%;
  height: 240px;
  margin-left: 50px;
  padding: 20px 20px 20px 20px;
  border-radius: 0.2rem;
  font-size: 18px;
  font-weight: bold;
  cursor: text;
`;
const FileBox = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 65%;
  gap: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 1em;
  font-size: 1.2rem;
  margin-top: 20px;
  margin-left: 50px;
`;

const FileCard = styled.div`
  background-color: #edf2f7;
  border: 3px dashed #cbd5e0;
  padding: 1em;
  margin-left: 50px;
  width: 300px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FileInput = styled.div`
  position: relative;
  margin-bottom: 1.5em;
  &:hover {
    button {
      background-color: #1482d0;
    }
  }
  input {
    position: relative;
    max-width: 200px;
    height: 46px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
  }
  button {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #0066cc;
    font-size: 1.1rem;
    border-radius: 4px;
    border: none;
    outline: none;
    transition: background-color 0.4s;
    box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5);
  }
  i {
    width: 1.5em;
    height: 1.5em;
    padding: 0.3em;
    background-color: #efff;
    color: #1482d0;
    border-radius: 50%;
    justify-content: center;
    margin-right: 0.8em;
    font-size: 0.8em;
  }
`;
const StyleButton = styled.button`
  border: 1px solid #e9ecef;
  border-radius: 0.2rem;
  width: 100px;
  height: 42px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 55%;
`;
