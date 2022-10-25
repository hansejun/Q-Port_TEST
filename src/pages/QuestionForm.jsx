import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuestion } from "../redux/modules/questions";
import { useState } from "react";

function QuestionForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    userId: 1,
    title: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onCreate = (e) => {
    e.preventDefault();
    if (input.title === "") {
      return window.alert("질문의 제목을 입력해주세요!");
    } else if (input.title === "" || input.content === "") {
      return window.alert("모든 항목을 기입해주세요!");
    }
    dispatch(addQuestion({ ...input }));
    setInput({ userId: 1, title: "", content: "" });
    navigate("/questions");
  };
  const formData = new FormData();

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0])
      formData.append("file", e.target.files[0]);
  };

  const submitFileData = () => {};
  return (
    <Layout>
      <PageTitle>QuestionForm</PageTitle>
      <Formlabel>새 질문 작성</Formlabel>
      <Line />
      <FormContainer onSubmit={onCreate}>
        <CreateTitle
          autoFocus
          type="text"
          name="title"
          onChange={onChange}
          value={input.title}
          placeholder="질문 제목"
          maxLength={40}
        />
        <div>
          <CreateContent
            type="text"
            name="content"
            onChange={onChange}
            value={input.content}
            placeholder="질문 내용"
            maxLength={200}
          />
          <AddBox>
            <CreateImg for="file" name="file_upload">
              이미지 업로드
            </CreateImg>
            <StyleInput
              type="file"
              id="file"
              style={{ display: "none" }}
              accept="image/jpeg, image/png"
              onChange={onFileChange}
              onClick={submitFileData}
            />
            <StyleButton>질문 추가</StyleButton>
          </AddBox>
        </div>
      </FormContainer>
    </Layout>
  );
}

export default QuestionForm;

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
  margin-top: 2rem;
  width: 1000px;
  height: 800px;
`;

const CreateTitle = styled.input`
  border: 1px solid #e9ecef;
  width: 60%;
  height: 42px;
  margin: 50px;
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

const AddBox = styled.div`
  display: flex;
  width: 230px;
  margin: 0 auto;
  margin-left: 42%;
`;

const CreateImg = styled.label`
  border: 1px solid #e9ecef;
  border-radius: 0.2rem;
  padding: 15px 8px 8px 8px;
  width: 130px;
  height: 42px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
`;

const StyleInput = styled.input``;

const StyleButton = styled.button`
  border: 1px solid #e9ecef;
  border-radius: 0.2rem;
  width: 100px;
  height: 42px;
  cursor: pointer;
`;
