import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import AddressAutocomplete from "../components/address/AddressAutocomplete"
import "../assets/styles/myplaces.scss";

// TODO: onClick(btn "+ Place") display <AddressForm/>
// TODO: Make .location.list into a component that will loop a user's saves addresses

const MyPlaces = () => {
  return (
    <>
      <NavBar />
      <div className="address-container p-2">
        <div className="row">
          <div className="col-md-12 text-right pt-2 pr-5">
            <button className="btn-success pl-4 pr-4 pt-2 pb-2">+ Place</button>
          </div>
        </div>
        <div className="p-5 m-5 address-content-container">
          <AddressAutocomplete />
        </div>
        <div className="row p-1 m-5 address-content-container">
          <div className="col-md-4 p-5">
            <h1>Title</h1>
            <p>
              This will be a shorthand description of what this page is used for
              that will also have some kind of clever text that is on brand for
              whatever we describe
            </p>
          </div>
          <div className="col-md-8 p-5 location-list">
            <button className="btn-warning mr-2 d-inline">Δ</button>
            <button className="btn-danger mr-2 d-inline">X</button>
            <p className="mr-2 d-inline">
              <b>Location.Name i.e. Home</b>
            </p>
            <p className="d-inline">
              Location.Address i.e. 123 Fake St. Raleigh
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPlaces;
