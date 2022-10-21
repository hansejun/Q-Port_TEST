import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper as={"header"}>
      <span>Logo</span>
    </HeaderWrapper>
  );
}
export default Header;

const HeaderWrapper = styled.div`
  height: 60px;
  background-color: black;
  color: white;
`;
