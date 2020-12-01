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
  console.log(user.firstName, "'s User ID: ", user._id)
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div className="profile-container p-5">
        <div className="row profile-content-container">
          <div className="col-md-3 text-center p-4 m-auto">
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
          <div className="col-md-9 pt-5 text-left ">
            <h1>
              {user.firstName} {user.lastName}'s Profile
            </h1>
            <div className="row">
              <div className="col-md-12">
                <RandomQuote />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3>
                  Vehicles
                  <Button
                    variant="success"
                    type="button"
                    onClick={() => history.push("/vehicle")}
                  >
                    +
                  </Button>
                </h3>
              </div>
            </div>
            <div className="row pt-2 pb-3">
              <div className="col-md-12 location-list">
                <VehilceLoop />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 ">
                <h3>
                  Places
                  <AddressModal />
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pt-2 pb-5 location-list">
                <PlacesLoop />
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
