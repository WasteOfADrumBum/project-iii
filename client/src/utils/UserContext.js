import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
export const checkUser = () => console.log("Migrate to Hook!");
export const CurrentUserContext = React.createContext();
export const CurrentUserProvider = ({ children }) => {
  const history = useHistory();
  console.log(history);
  const [currentUser, setCurrentUser] = React.useState(null);

  const refreshToken = async () => {
    // Get Token
    const token = localStorage.getItem("__token__");
    // Throw Error if there is No Token
    if (!token) history.push("/login");
    try {
      // Authorize token bearer
      const response = await axios.get("/api/v1/users/jwt", {
        headers: { Authorization: "Bearer " + token },
      });
      if (response.status !== 200) throw new Error("Invalid Token");
      setCurrentUser("response", response.data);
    } catch (error) {
      console.log("checkUser catch " + error);
      history.push("/login");
    }
  };

  const setUser = (user) => {
    setCurrentUser(user);
  };

  console.log("Context", currentUser);
  const userWithMethods = { ...currentUser, setUser, refreshToken };
  console.log("Methods", userWithMethods);
  // value={{user:{...user}}}
  return (
      <CurrentUserContext.Provider value={userWithMethods}>
        {children && children}
      </CurrentUserContext.Provider>
  );
};
