import styled from "styled-components";
import Header from "../Header/Header";

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
  width: 100%;
  margin: 0 auto;
`;
