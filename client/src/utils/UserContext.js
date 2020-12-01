import React from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

// Pass Current User into component tree without passing props
// through intermediate elements manually at every level.
export const CurrentUserContext = React.createContext();

export const useUserContext = () => React.useContext(CurrentUserContext);

// Pass User Context through app router
export const CurrentUserProvider = ({ children }) => {
  const [state, setState] = React.useState({
    user: {},
    trigger: false
  });

  const fireTrigger = () => setState({ ...state, trigger: !state.trigger })

  React.useEffect(() => {
    // Verify User Token and Auth
    const refreshToken = async () => {
      // Get Token from local storage

      try {
        const token = localStorage.getItem("__token__");
        if (!token) throw new Error("No token saved")
        // Authorize token bearer
        const response = await axios.get("/api/v1/users/jwt", {
          headers: { Authorization: "Bearer " + token },
        });
        if (response.status !== 200) throw new Error("Invalid Token");

        setState(state => ({ ...state, user: response.data }))
      } catch (error) {
        console.warn(error.message)
      }
    };

    refreshToken();
  }, [state.trigger])

  return (
    <CurrentUserContext.Provider value={[state.user, fireTrigger]}>
      {children}
    </CurrentUserContext.Provider>
  );
};

// console.log("1) Current User Provider");
// history redirect
// const history = useHistory();
// console.log("2) history" + history);
// Tkaes the intial state of the user and sets it to null
// console.log("3) currentUser = Null " + currentUser);

// Set user to current logged in user
// const setUser = (user) => {
//   setCurrentUser(user);
//   console.log("6) setCurrentUser");
// };
// console.log("4) setUser" + setUser);

// Context provider methods
// const userWithMethods = { refreshToken, ...currentUser, setUser };
// console.log("5) userWithMethods" + userWithMethods);

// Provider accepts method props and passes to decending components
// Any component can read it, no matter how deep it is.
// Descendants of the Provider will re-render whenever the Provider’s value prop changes.