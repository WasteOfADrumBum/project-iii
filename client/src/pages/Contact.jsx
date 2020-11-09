import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import DataCarousel from "../components/carousel/Carousel";
import "../assets/styles/contact.scss";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 p-3 m-3">
              <h3>Meet Our Team</h3>
              <div style={{ textTransform: "uppercase" }}>
                - T<p className="mirror">E</p>AM-I Produ
                <p className="mirror">c</p>tions™ -
              </div>
            </div>
          </div>
          <div className="row text-center">
            {/* 
            // TODO: col-1: Logo col-2: Josh col-3: Max col-4: Jim col-5: Mark col-6: Arlene
            // ! Images need to be a 300x500px .jpg
            */}
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="https://via.placeholder.com/300x500"
                alt="Team-I Productions Logo"
              />
            </div>
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="assets/images/josh.jpg"
                alt="Joshua"
              />
            </div>
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="assets/images/max.jpg"
                alt="Max"
              />
            </div>
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="assets/images/jim.jpg"
                alt="Jim"
              />
            </div>
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="assets/images/mark.jpg"
                alt="Mark"
              />
            </div>
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="assets/images/arlene.jpg"
                alt="Arlene"
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12 p-3 m-3">
              <i>
                "Coming together is a beginning, Keeping together is progress,
                Working together is Success!"
              </i>
              <h2>- Henry Ford</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6  mb-5">
              <DataCarousel />
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
