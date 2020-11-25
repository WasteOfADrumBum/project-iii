import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import ColumnChart from "../components/charts/ColumnChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import AddressModal from "../components/modal/Modal";
import { Button } from "react-bootstrap";
import "../assets/styles/profile.scss";
import { CurrentUserContext } from "../utils/UserContext";
import { useHistory } from "react-router-dom";
import VehilceLoop from "../components/loops/VehicleLoop"

const Profile = () => {
  const {firstName, lastName} = React.useContext(CurrentUserContext);
  const history = useHistory();

  console.log("PROFILE | User Info: ", firstName, lastName)

  return (
    <>
      <NavBar />
      <div className="profile-container p-5">
        <div className="row profile-content-container">
          <div className="col-md-3 text-center p-4 m-auto">
            <img className="img-fluid"
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
              {firstName} {lastName}'s Profile
            </h1>
            <div className="row">
              <div className="col-md-12">Profile Info</div>
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
            {/* 
            // TODO: Make this into a loop ↓↓↓
            */}
            <div className="row pt-2 pb-3">
              <div className="col-md-12 location-list">
                <button className="btn-warning mr-2 d-inline">Δ</button>
                <button className="btn-danger mr-2 d-inline">X</button>
                <p className="mr-2 d-inline">
                  <b>vehicle.year vehicle.make vehicle.model </b>
                </p>
                <VehilceLoop/>
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
                <button className="btn-warning mr-2 d-inline">Δ</button>
                <button className="btn-danger mr-2 d-inline">X</button>
                <p className="mr-2 d-inline">
                  <b>places.name</b>
                </p>
                <p className="d-inline">
                  places.street places.city places.state places.zip
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
