import styled from "styled-components";

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;

const Wrapper = styled.div`
  font-weight: 600;
  max-width: 1000px;
  margin: 0 auto;
`;
