import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "../assets/styles/results.scss";
import { checkUser } from "../utils/UserVerify";

// TODO: Caputre form data and store to Database

const Results = () => {
  checkUser();

  return (
    <>
      <NavBar />
      <div className="results-container text-center p-5">
        <h1>Route Options</h1>
        <div className="row mt-5 p-5 results-content-container">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <b>Car Only</b>
                </p>
              </div>
              <div className="col-md-6">
                <button className="btn-success">Export to MapQuest</button>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-12">Map Stuff</div>
            </div>
            <div className="row">
              <div className="col-md-6 text-left">Map.Miles</div>
              <div className="col-md-6 text-right">Map.Minutes</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <b>Car & Train</b>
                </p>
              </div>
              <div className="col-md-6">
                <button className="btn-success">Export to MapQuest</button>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-12">Map Stuff</div>
            </div>
            <div className="row">
              <div className="col-md-6 text-left">Map.Miles</div>
              <div className="col-md-6 text-right">Map.Minutes</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Results;
