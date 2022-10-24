/* import { useState } from "react"; */
import { Link } from "react-router-dom";
import styled from "styled-components";
/* import Qport from "../static/logo.png"; */


function Header() {
  /* const [isLogin, setIsLogin] = useState(false); */
  return (
    <HeaderWrapper as={"header"}>
      <nav>
        <Logo>Logo</Logo>
        <ul>
        <Link to="/login">Login</Link>
        <Link to="/join">Join</Link>
        </ul>
        {/* <ul>
          {!isLogin ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/join">Join</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={`/profile/:id`}>Profile</Link>
              </li>
              <li>
                <Link to={`/logout`}>Logout</Link>
              </li>
            </>
          )}
          </ul>  */}
      </nav>
    </HeaderWrapper>
  );
}
export default Header;
const HeaderWrapper = styled.div`
  width: 100%;
  height: 44px;
  background-color: #323232;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  nav {
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      button {
        margin-left: 3rem;
      }
      li {
        font-size: 0.9rem;
        margin-left: 1rem;
        font-weight: 500;
      }
    }
  }
`;

const Logo = styled.div`
  /* background-image: url('$(Qport)'); */
`;

