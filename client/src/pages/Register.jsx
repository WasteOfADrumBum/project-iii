import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "../assets/styles/register.scss";
import { Form, Col, Button } from "react-bootstrap";
import RandomQuote from "../components/quote/Quote";
import Axios from "axios";
import { checkUser } from "../utils/UserVerify";

// TODO: Make text animated and appear after the user selects the signup button
// TODO: Caputre form data and store to Database
// TODO: navigate to ./vehicle after form submit

const Register = () => {
  React.useEffect(() => {
    checkUser();
  }, []);

  const [state, setstate] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    role: "user",
  });

  function handleChange({ target: { name, value } }) {
    setstate({ ...state, [name]: value });
  }

  const handleClick = async () => {
    try {
      const response = await Axios.post("/api/v1/users/signup", state);
      console.log("SIGNUP | Response", response);
      localStorage.setItem("__token__", response.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="register-container p-5">
        <div className="row pt-5 form-container">
          <div className="col-md-4 p-5">
            <h1>Thank you for your contribution to a safer planet.</h1>
            <RandomQuote />
          </div>
          <div className="col-md-8  p-5">
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    autoComplete="username"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I accept the terms in the license agreement."
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={() => handleClick()}
              >
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
