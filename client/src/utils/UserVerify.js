import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom'
export const checkUser = () => console.log("Migrate to Hook!")
export const useUser = () => {
  const history = useHistory();
  const [user, setUser] = React.useState({})
  React.useEffect(() => {
    try {
      const getUSER = async () => {
        // Get Token
        const token = localStorage.getItem("__token__");
        // Throw Error if there is No Token
        if (!token) throw new Error("No Token");
        // Authorize token bearer
        const response = await axios.get("/api/v1/users/jwt", {
          headers: { Authorization: "Bearer " + token },
        });
        if (response.status !== 200) throw new Error("Invalid Token")
        setUser(response.data);
      }
      getUSER()
    } catch (error) {
      console.log("checkUser catch " + error);
      history.push("/login")
    }
  }, [history])
  return user;
};
