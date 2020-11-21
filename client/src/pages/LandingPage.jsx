import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Button from "react-bootstrap/Button";
import "../assets/styles/landingpage.scss";
import { checkUser } from "../utils/UserVerify";

const LandingPage = () => {
  // ! ↓↓↓ Moved to function in Client Utils ↓↓↓
  // ! DO NOT REMOVE THIS CODE FROM HERE
  // React.useEffect(() => {
  //   // Check logged in User
  //   const checkUser = async () => {
  //     try {
  //       // Get Token
  //       const token = localStorage.getItem("__token__");
  //       console.log("LandingPage __token__", token);
  //       // Throw Error if there is No Token
  //       if (!token) throw new Error("No Token");
  //       // Authorize token bearer
  //       const response = await axios.get("/api/v1/users", {
  //         headers: { Authorization: "Bearer " + token },
  //       });
  //       console.log("Authorized token bearer response:" + response);
  //     } catch (error) {
  //       console.log("checkUser catch " + error);
  //     }
  //   };
  //   checkUser();
  // }, []);
  checkUser()

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
