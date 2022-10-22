import styled from "styled-components";
import HeaderHome from "../Header/Header";

function LayoutHome({ children }) {
  return (
    <WrapperHome>
      <HeaderHome />
      {children}
    </WrapperHome>
  );
}

export default LayoutHome;

const WrapperHome = styled.div`
  font-weight: 600;
  width: 1900px;
  margin: 0 auto;
`;