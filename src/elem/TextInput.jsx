import styled from "styled-components";

function TextInput({ type, register, label, errors = {}, errorName = "" }) {
  return (
    <>
      <InputLabel>
        <span>{label}</span>
        <Input {...register} type={type} />
      </InputLabel>
      <ErrorMessage>
        {errors[errorName] && errors[errorName].message}
      </ErrorMessage>
    </>
  );
}
export default TextInput;
const InputLabel = styled.label`
  position: relative;
  span {
    position: absolute;
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.5);
    background-color: white;
    top: -0.4rem;
    left: 1.2rem;
    padding: 0 0.2rem;
  }
  &:focus-within span {
    color: #7298ff;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 0.8rem 0.6rem;
  font-size: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: white;
  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset;
  }
  &:focus {
    border: 1.5px solid #7298ff;

    &::placeholder {
      opacity: 0;
    }
  }
`;
const ErrorMessage = styled.span`
  padding-top: 0.2rem;
  height: 1.6rem;
  color: red;
  font-size: 0.75rem;
`;
