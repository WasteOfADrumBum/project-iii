import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import AddressAutocomplete from "../components/address/AddressAutocomplete";
import AccordionComp from "../components/accordion/Accordion";
import "../assets/styles/letsgo.scss";
import Map from "../components/address/MapContainer";
import { withScriptjs } from "react-google-maps";
import { useUser } from "../utils/UserVerify";
import { useHistory } from "react-router-dom";

// TODO: Dropdown placeholder values to be replaced with saved locations from database
// TODO: onClick() Let's Go! btn send address information to map and map to accordion

const LetsGo = () => {
  const history = useHistory();
  const user = useUser();

  const MapLoader = withScriptjs(Map);

  return (
    <>
      <NavBar />
      <div className="letsgo-container p-5">
        <div className="letsgo-form-container">
          <div className="row text-center p-5">
            <div className="col-md-12">
              <h1>Where are we going today {user.firstName}?</h1>
              <p>Select from one of your places, or enter a new address!</p>
            </div>
          </div>
          <div className="row text-center p-3">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h2>
                    <label htmlFor="from-location">From:</label>
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
                <div className="col-md-12 pt-3 address-content-container">
                  <AddressAutocomplete />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h2>
                    <label htmlFor="to-location">To:</label>
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
                <div className="col-md-12 pt-3 address-content-container">
                  <AddressAutocomplete />
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <button className="btn-success mt-2 mb-5 pt-2 pb-2 pr-4 pl-4">
                Let's Go!
              </button>
            </div>
          </div>
          <div className="row text-center m-3">
            <div className="col-md-6 mb-5">
              <MapLoader
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiG1j9c6Y1v76qmSWne_tAc_5TRiDQlLg"
                loadingElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <div className="col-md-6 mb-5">
              <AccordionComp />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LetsGo;
