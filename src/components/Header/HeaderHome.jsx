import styled from "styled-components";
import Button from '../../elem/Button';

const btnStyle = {
  _width:"7%",
  _padding:"1px",
}

function HeaderHome() {
  return (
    <HeaderWrapperHome as={"header"}>
      <span>Qport</span>
      <Button {...btnStyle}>Login</Button>
      <Button {...btnStyle}>Join</Button>
    </HeaderWrapperHome>
  );
}
export default HeaderHome;

const HeaderWrapperHome = styled.div`
  height: 44px;
  max-width: 1000px;
  background-color:#323232;
  color: white;
`;