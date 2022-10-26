import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import instance from "../../shared/apis";
import { useJwt } from "react-jwt";
const cookies = new Cookies();
const myToken = cookies.get("user_token");

const UseUser = () => {
  const [user, setUser] = useState();
  // const { decodedToken, isExpired } = useJwt();
  // const isMyTokenIsExpired = isExpired(myToken);
  // console.log(isMyTokenIsExpired);

  const readUser = async () => {
    const { data } = await instance.get("users");
    setUser(data.data.user);

    //setUser(decodedToken(myToken));
  };

  useEffect(() => {
    if (myToken) {
      readUser();
    }
  }, []);

  return user;
};

export default UseUser;
