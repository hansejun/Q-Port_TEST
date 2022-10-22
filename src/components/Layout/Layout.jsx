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
  max-width: 1000px;
  margin: 0 auto;
`;
