import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import DataCarousel from "../components/carousel/Carousel";
import "../assets/styles/contact.scss";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 pt-3 mt-3 contact-text-container border-radius-top" >
              <h1>Meet Our Team</h1>
              <div style={{ textTransform: "uppercase" }}>
                - T<p className="mirror">E</p>AM-I Produ
                <p className="mirror">c</p>tions™ -
              </div>
            </div>
          </div>
          <div className="row text-center contact-text-container">
            <div className="col-md-1 m-0 p-0"/>
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
            <div className="col-md-1 m-0 p-0"/>
          </div>
          <div className="row text-center">
            <div className="col-md-12 p-3 mb-3 contact-text-container border-radius-bottom">
              <i>
                "Coming together is a beginning, Keeping together is progress,
                Working together is Success!"
              </i>
              <h3>- Henry Ford</h3>
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

export default Contact;
