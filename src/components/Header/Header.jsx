import styled from "styled-components";
import Button from "../../elem/Button";

const btnStyle = {
  _width: "7%",
  _padding: "1px",
};

function Header() {
  return (
    <HeaderWrapper as={"header"}>
      <span>Qport</span>
      <Button {...btnStyle}>Login</Button>
      <Button {...btnStyle}>Join</Button>
    </HeaderWrapper>
  );
}
export default Header;

const HeaderWrapper = styled.div`
  height: 60px;
  background-color: #323232;
  color: white;
`;
