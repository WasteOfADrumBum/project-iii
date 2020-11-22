import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import axios from "axios";
import "../assets/styles/login.scss";
import { checkUser } from "../utils/UserVerify";
import { Form, Col, Button } from "react-bootstrap";

const LoginPage = () => {
  React.useEffect(() => {
    checkUser();
  }, []);

  if (localStorage.getItem("__token__")) {
    window.location.href = "./profile";
  }

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
    try {
      const response = await axios.post("/api/v1/users/login", state);
      console.log("LOGIN | Response", response);
      localStorage.setItem("__token__", response.data.token);
      window.location.href = "./profile";
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
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        autoComplete="username"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        autoComplete="new-password"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Button
                    variant="success"
                    type="submit"
                    style={{ width: "100%" }}
                    onClick={() => handleClick()}
                  >
                    Login
                  </Button>
                </Form>
              </div>
            </div>
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
