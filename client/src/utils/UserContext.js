import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Pass Current User into component tree without passing props
// through intermediate elements manually at every level.
export const CurrentUserContext = React.createContext();
// Pass User Context through app router
export const CurrentUserProvider = ({ children }) => {
  console.log("1) Current User Provider");
  // history redirect
  const history = useHistory();
  console.log("2) history" + history);
  // Tkaes the intial state of the user and sets it to null
  const [currentUser, setCurrentUser] = React.useState(null);
  console.log("3) currentUser = Null " + currentUser);
  // Verify User Token and Auth
  const refreshToken = async () => {
    // Get Token from local storage
    const token = localStorage.getItem("__token__");
    console.log("7) token " + token);
    try {
      // Authorize token bearer
      console.log("8) Token Try Before");
      const response = await axios.get("/api/v1/users/jwt", {
        headers: { Authorization: "Bearer " + token },
      });
      console.log("9) Refresh Token Try Response Status" + response.status);
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
    console.log("6) setCurrentUser");
  };
  console.log("4) setUser" + setUser);

  // Context provider methods
  const userWithMethods = { refreshToken, ...currentUser, setUser };
  console.log("5) userWithMethods" + userWithMethods);

  // Provider accepts method props and passes to decending components
  // Any component can read it, no matter how deep it is.
  // Descendants of the Provider will re-render whenever the Provider’s value prop changes.
  return (
    <CurrentUserContext.Provider value={userWithMethods}>
      {children && children}
    </CurrentUserContext.Provider>
  );
};
