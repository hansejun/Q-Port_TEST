import styled from "styled-components";
import Header from "../Header/HeaderHome";

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  font-weight: 600;
  width: 1900px;
  margin: 0 auto;
`;
