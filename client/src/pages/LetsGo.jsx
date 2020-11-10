import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import AddressForm from "../components/address/addressForm";
import "../assets/styles/letsgo.scss";

// TODO: Dropdown placeholder values to be replaced with saved locations from database
// ! <AddressForm/> needs to be independent when called again

const LetsGo = () => {
  return (
    <>
      <NavBar />
      <div className="letsgo-container p-5">
        <div className="row text-center p-5">
          <div className="col-md-12">
            <h1>Where are we going today?</h1>
            <p>Select from one of your places, or enter a new address!</p>
          </div>
        </div>
        <div className="row text-center p-3 letsgo-form-container">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  <label for="from-location">From:</label>
                </h2>
              </div>
              <div className="col-md-12">
                <select
                  id="from-location"
                  name="from-location"
                  style={{ width: "100%" }}
                >
                  <option value="placeholder">Placeholder</option>
                </select>
              </div>
              <div className="col-md-12 pt-3">
                <AddressForm />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  <label for="to-location">To:</label>
                </h2>
              </div>
              <div className="col-md-12">
                <select
                  id="to-location"
                  name="to-location"
                  style={{ width: "100%" }}
                >
                  <option value="placeholder">Placeholder</option>
                </select>
              </div>
              <div className="col-md-12 pt-5">
                <AddressForm />
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center">
            <div className="col-md-12">
              <button className="btn-success mt-5 pt-2 pb-2 pr-4 pl-4">
                Let's Go!
              </button>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default LetsGo;
