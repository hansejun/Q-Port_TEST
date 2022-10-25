import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const myToken = cookies.get("user_token");

const UseUser = () => {
  const [user, setUser] = useState("");
  const readUser = async () => {
    const { data } = await axios.get(`http://localhost:3001/users/${myToken}`);
    setUser(data);
  };

  useEffect(() => {
    if (myToken) {
      readUser();
    }
  }, []);

  return user;
};

export default UseUser;
