import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { readUser } from "../../redux/modules/loginUser";
import { removeCookieToken } from "../../shared/Cookie";
import UseUser from "../hooks/useUser";

function Header() {
  const user = UseUser();
  //const cookie = getCookieToken();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //로그인한 유저가 login / join 페이지 접근시 이전 페이지로 되돌린다.
  useEffect(() => {
    if (user) {
      switch (pathname) {
        case "/login":
          navigate(-1);
          break;
        case "/join":
          navigate(-1);
          break;
        default:
          return;
      }
    }
  }, [pathname, user, navigate]);

  useEffect(() => {
    if (user) dispatch(readUser(user?.id));
  }, [dispatch, user]);

  const onClick = () => {
    removeCookieToken();
    window.location.reload();
  };

  return (
    <HeaderWrapper as={"header"}>
      <nav>
        <span>Logo</span>
        <ul>
          {!user ? (
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
                <Link to={`/profile/${user?.id}`}>Profile</Link>
              </li>
              <li onClick={onClick}>Logout</li>
            </>
          )}
        </ul>
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
    width: 80%;
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
        font-size: 0.8rem;
        margin-left: 1rem;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }
`;

// const Logo = styled.img`
//   width: 4rem;
//   color: white;
// `;
