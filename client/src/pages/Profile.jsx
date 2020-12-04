import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import ColumnChart from "../components/charts/ColumnChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import AddressModal from "../components/modal/Modal";
import { Button } from "react-bootstrap";
import "../assets/styles/profile.scss";
import { useUserContext } from "../utils/UserContext";
import { useHistory } from "react-router-dom";
import VehilceLoop from "../components/loops/VehicleLoop";
import PlacesLoop from "../components/loops/PlacesLoop";
import RandomQuote from "../components/quote/Quote";

const Profile = () => {
  const [user] = useUserContext();
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div className="profile-container p-3">
        <div className="profile-content-container p-3">
          <div className="row justify-content-center profile-img-container">
            <div className="col-md-3 p-4 m-auto profile-img">
              <img
                className="img-fluid"
                src="../assets/images/placeholder-profile-sq.jpg"
                alt="Profile"
                style={{
                  borderRadius: "100px",
                  border: ".5rem solid  rgba(255, 255, 255, .5)",
                }}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 m-auto text-center">
              <h2>
                {user.firstName} {user.lastName}
              </h2>
            </div>
          </div>
          <div className="row justify-content-center pb-3">
            <div className="col-md-12 text-center">
              <RandomQuote />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 pb-5">
              {/* Name */}
              <div className="row">
                <div className="col-md-12 text-left">
                  <h5>Basic Information:</h5>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 text-left">
                  <b className="d-inline">Full Name: </b>
                </div>
                <div className="col-md-6 text-left">
                  <p className="d-inline">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="row">
                <div className="col-md-6 text-left">
                  <b className="d-inline">Email: </b>
                </div>
                <div className="col-md-6 text-left">
                  <p className="d-inline">{user.email}</p>
                </div>
              </div>
              {/* ID */}
              <div className="row">
                <div className="col-md-6 text-left">
                  <b className="d-inline">User ID: </b>
                </div>
                <div className="col-md-6 text-left">
                  <p className="d-inline">{user._id}</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-left">
              {/* Vehicles */}
              <div className="row">
                <div className="col-md-12">
                  <h5>
                    Vehicles:
                    <Button
                      variant="success"
                      type="button"
                      onClick={() => history.push("/vehicle")}
                    >
                      +
                    </Button>
                  </h5>
                  <hr />
                </div>
              </div>
              <div className="row pt-2 pb-3">
                <div className="col-md-12 location-list">
                  <VehilceLoop />
                </div>
              </div>
              {/* Places */}
              <div className="row pt-3">
                <div className="col-md-12 ">
                  <h5>
                    Places:
                    <AddressModal />
                  </h5>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 pt-2 pb-5 location-list">
                  <PlacesLoop />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 profile-content-container">
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
