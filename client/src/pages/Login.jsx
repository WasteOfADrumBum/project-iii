import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import axios from "axios";
import "../assets/styles/login.scss";

const LoginPage = () => {
  // Set email & password State to ""
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  // Hadle Change State
  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: value });

  // Handle onClick auth route
  const handleClick = async () => {
    console.log(state)
    try {
      const response = await axios.post("/api/v1/users/login", state);
      console.log("response", response)
      localStorage.setItem("__token__", response.data.token);
      // TODO: Load /profile
    } catch (error) {
      console.log(error);
    }
  };

  // Login.jsx functional and responding to seed data as of 11.18.2020
  // DON'T Modify This Page!
  return (
    <>
      <NavBar />
      <div className="image-container text-center">
        <div className="row">
          <div className="col-lg-4" />
          <div className="login-text p-5 m-5 col-lg-4">
            <div className="row pb-3 text-center">
              <div className="col-md-12">
                <h1>Account Login</h1>
              </div>
              <div className="col-md-12 mt-2 mb-2">
                <input
                  type="text"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  name="email"
                  placeholder="User name"
                  autoComplete="username"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="password"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
                  autoComplete="urrent-password"
                />
              </div>
            </div>
            <button
              className="btn-success"
              style={{ width: "100%" }}
              onClick={handleClick}
            >
              Login
            </button>
            <p className="mt-5">
              <Link to="./register" alt="register" style={{ color: "black" }}>
                Register
              </Link>
            </p>
          </div>
          <div className="col-lg-4" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
