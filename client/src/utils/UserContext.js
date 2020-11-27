import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Pass Current User into component tree without passing props
// through intermediate elements manually at every level.
export const CurrentUserContext = React.createContext();
// Pass User Context through app router
export const CurrentUserProvider = ({ children }) => {
  console.log("Current User Provider");
  // history redirect
  const history = useHistory();
  // Tkaes the intial state of the user and sets it to null
  const [currentUser, setCurrentUser] = React.useState(null);

  // Verify User Token and Auth
  const refreshToken = async () => {
    // Get Token from local storage
    const token = localStorage.getItem("__token__");
    try {
      // Authorize token bearer
      const response = await axios.get("/api/v1/users/jwt", {
        headers: { Authorization: "Bearer " + token },
      });
      if (response.status !== 200) throw new Error("Invalid Token");
    } catch (error) {
      console.log("checkUser catch " + error);
      // Redirect to Login Page
      history.push("/login");
    }
  };

  // Set user to current logged in user
  const setUser = (user) => {
    setCurrentUser(user);
  };

  // Context provider methods
  const userWithMethods = { ...currentUser, setUser, refreshToken };

  // Provider accepts method props and passes to decending components
  // Any component can read it, no matter how deep it is.
  // Descendants of the Provider will re-render whenever the Provider’s value prop changes. 
  return (
    <CurrentUserContext.Provider value={userWithMethods}>
      {children && children}
    </CurrentUserContext.Provider>
  );
};
