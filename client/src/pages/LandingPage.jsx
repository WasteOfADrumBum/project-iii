import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Button from "react-bootstrap/Button";
import "../assets/styles/landingpage.scss";
import axios from "axios";

const LandingPage = () => {
  React.useEffect(() => {
    // Check logged in User
    const checkUser = async () => {
      try {
        // Get Token
        const token = localStorage.getItem("__token__");
        console.log("LandingPage __token__", token);
        // Throw Error is No Token
        if (!token) throw new Error("No Token");
        // Authorize token bearer
        // ! Current issue: line 26 catch (error) console.log(GET http://localhost:3000/api/v1/users 403 (Forbidden))
        const response = await axios.get("/api/v1/users/protect", {
          headers: { Authorization: "Bearer " + token },
        });
        console.log("response:" + response);
      } catch (error) {
        console.log("checkUser catch " + error);
      }
    };
    checkUser();
  }, []);

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
