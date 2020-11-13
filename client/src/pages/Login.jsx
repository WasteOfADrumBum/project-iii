import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import axios from "axios";
import "../assets/styles/login.scss";

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
    }
  };

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
                />
              </div>
              <div className="col-md-12">
                <input
                  type="password"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
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
