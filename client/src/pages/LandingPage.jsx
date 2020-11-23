import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Button from "react-bootstrap/Button";
import "../assets/styles/landingpage.scss";
import { checkUser } from "../utils/UserVerify";

const LandingPage = () => {
  React.useEffect(() => {
    // ! ↓↓↓ Moved to function in Client Utils ↓↓↓
    checkUser();
  }, []);

  if (localStorage.getItem("__token__")) {
    window.location.href = "./profile";
  }

  return (
    <>
      <NavBar />
      <div className="landing-page-container">
        <div className="row">
          <div className="col-lg-4" />
          <div className="jumbo-text p-5 m-5 col-lg-4">
            <h2>Hello we are</h2>
            <h1>Carbon FX</h1>
            <p className="mt-4">Start reducing your carbon footprint today</p>
            <p className="mt-5">
              <Button variant="primary">
                <Link to="./login" alt="login" style={{ color: "white" }}>
                  Get Started
                </Link>
              </Button>
            </p>
          </div>
          <div className="col-lg-4" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
