import React from "react";

// TODO: Remove LogoutLink from NavBar after removing token

// remove token from cookie, localStorage and sessionStorage
const LogoutLink = () => {
  const handleClick = () => {
    try {
      //get token
      const token = localStorage.getItem("__token__");

      if (token) {
        // Set token to expire
        console.log("Cookie", document.cookie);
        document.cookie =
          "__token__=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

        // remove token from local storage
        localStorage.removeItem("__token__");
        console.log("Remove token from local");

        // remove token from session storage
        sessionStorage.removeItem("__token__");
        console.log("Remove token from session");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // After handleClick logs user out, user is navigated back to homepage
  return (
    <>
      <a href="/" className="nav-link" onClick={handleClick}>
        Logout
      </a>
    </>
  );
};

export default LogoutLink;
