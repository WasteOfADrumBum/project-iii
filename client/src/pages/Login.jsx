import React from "react";
import axios from "axios";

const LoginPage = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: value });

  const handleClick = async () => {
    try {
      const response = await axios.post("/auth", state);
      localStorage.setItem("__token__", response.data.token);
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <>
      <input type="text" onChange={handleChange} name="email" />
      <input type="text" onChange={handleChange} name="password" />
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default LoginPage;
