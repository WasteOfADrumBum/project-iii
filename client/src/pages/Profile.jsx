import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import ColumnChart from "../components/charts/ColumnChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import AddressModal from "../components/modal/Modal"
import "../assets/styles/profile.scss";
import { checkUser } from "../utils/UserVerify";

const Profile = () => {
  checkUser()

  return (
    <>
      <NavBar />
      <div className="profile-container p-5">
        <div className="row profile-content-container">
          <div className="col-md-3 text-center p-4">
            <img
              src="https://via.placeholder.com/200"
              alt="Profile"
              style={{
                borderRadius: "100px",
                border: ".5rem solid  rgba(255, 255, 255, .5)",
              }}
            />
          </div>
          <div className="col-md-9 pt-5 text-left ">
            <h1>data.firstName data.lastName's Profile</h1>
            <div className="row">
              <div className="col-md-12">Profile Info</div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3>Vehicles</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 ">
                <h3>Places</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <AddressModal/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pt-2 pb-5 location-list">
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
        </div>
        <div className="row pt-5">
          <div className="col-md-6 text-center p-3">
            <ColumnChart />
          </div>
          <div className="col-md-6 text-center p-3">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
