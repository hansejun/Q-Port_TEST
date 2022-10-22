import { useForm } from "react-hook-form";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import TextInput from "../elem/TextInput";
import Button from "../elem/Button";
function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onValid = (inputs) => {};

  return (
    <Layout>
      <LoginContainer as="main">
        <Form onSubmit={handleSubmit(onValid)}>
          <h1>로그인</h1>
          <TextInput
            register={{
              ...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "이메일을 확인해주세요.",
                },
              }),
            }}
            type={"email"}
            label={"Email"}
          />
          <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
          <TextInput
            register={{
              ...register("password", { required: "비밀번호를 입력해주세요." }),
            }}
            label="password"
            type="password"
          />
          <ErrorMessage>
            {errors.password && errors.password.message}
          </ErrorMessage>

          <Button _width="100%" _fontSize="0.9rem" _padding="0.8rem">
            로그인
          </Button>
        </Form>
      </LoginContainer>
    </Layout>
  );
}

export default Login;

const LoginContainer = styled.div`
  padding: 10vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 30rem;
  padding: 4rem 3rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;
const ErrorMessage = styled.span`
  padding-top: 0.2rem;
  height: 1.6rem;
  color: red;
  font-size: 0.75rem;
`;
