import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import AddressAutocomplete from "../components/address/AddressAutocomplete";
import AccordionComp from "../components/accordion/Accordion";
import "../assets/styles/letsgo.scss";
import Map from "../components/address/MapContainer";
import { withScriptjs } from "react-google-maps";
import { CurrentUserContext } from "../utils/UserContext";
import LetsGoLoop from "../components/loops/LetsGoLoop";
import axios from "axios"

const LetsGo = () => {
  const [user]= React.useContext(CurrentUserContext);

  const MapLoader = withScriptjs(Map);

  const [state, setState] = React.useState({
    latFrom: "",
    lonFrom: "",
    latTo: "",
    lonTo: "",
    distance: "",
    totalTimeTravel: "",
    travelMode: "DRIVING",
  });

  let addressInfoTo;
  const getAddressDataTo = (addressData) => {
    if (
      addressData.lat &&
      addressData.lon &&
      addressData.zip &&
      addressData.street &&
      addressData.city &&
      addressData.state
    ) {
      addressInfoTo = addressData;
    }
  };

  let addressInfoFrom;
  const getAddressDataFrom = (addressData) => {
    if (
      addressData.lat &&
      addressData.lon &&
      addressData.zip &&
      addressData.street &&
      addressData.city &&
      addressData.state
    ) {
      addressInfoFrom = addressData;
    }
  };

  const hanldeDistanceUpdate = (distance, time) => {
    console.log("WE'RE IN HANDLEDISTANCEUPDATE, AND THE STATE IS ", state);
    console.log(
      "WHAT WE'RE GOING TO DO IS CHANGE THE DISTANCE TO ",
      distance,
      " AND THE TIME TO ",
      time
    );
    if (state.distance !== distance.text) {
      setState({
        ...state,
        distance: distance.text,
        totalTimeTravel: time.text,
      });
    } else {
      console.log("all set!  Nothing to update");
    }
  };

  const getMode = (e) => {
    setState({ ...state, travelMode: e.currentTarget.id });

    console.log(e.currentTarget.id);
  };

  // We made this one const instead of two
  const handleButtonClick = async () => {
    if (addressInfoFrom && addressInfoTo) {
      console.log(addressInfoFrom, addressInfoTo);
      setState({
        ...state,
        latFrom: addressInfoFrom.lat,
        lonFrom: addressInfoFrom.lon,
        latTo: addressInfoTo.lat,
        lonTo: addressInfoTo.lon,
      });
    }
  };

  const AddRoute= async (routeData) => {
    console.log("Data", routeData);
    console.log("user", user);
    if (routeData) {
      console.log("Route Parameters: ", routeData);
      console.log("Adding to User: ", user.firstName, user._id);
      try {
        const token = localStorage.getItem("__token__");
        if (!token) throw new Error("No token saved");
        console.log("passed token error checking");

        await axios.patch(`/api/v1/users/updateRoute/${user._id}`, routeData, {
          headers: { Authorization: "Bearer " + token },
        });
        console.log("Posted Route Parameters: ", routeData);
        console.log("Posted  Adding to User: ", user.firstName, user._id);
      } catch (error) {
        console.warn(error.message);
      }
    }
  };

  const testFn = () => {
    console.log("hello")
    const co2Arr = []
    console.log(state.distance, state.travelMode)
    const testVal = document.getElementsByClassName("co2Div")
    for (let i = 0; i < testVal.length; i++) {
      co2Arr.push(parseFloat(testVal[i].childNodes[0].data))
    }
    if (state.travelMode === "DRIVING") {
      const routeData = {
        mode: "Driving",
        footprint: co2Arr[0]
      } 
      AddRoute(routeData)

    } else if (state.travelMode === "Walking") {
      const routeData = {
        mode: "WALKING",
        footprint: co2Arr[1]
      }
      AddRoute(routeData)

    } else {
      const routeData = {
        mode: "Cycling",
        footprint: co2Arr[2]
      }
      AddRoute(routeData)
    }

  }

  console.log("current state", state);

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
                  <LetsGoLoop />
                </div>
                <div className="col-md-12 pt-3 address-content-container">
                  <AddressAutocomplete
                    getAddressData={getAddressDataFrom}
                    shouldRunGetAddressDataCallback={true}
                  />
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
                  <LetsGoLoop />
                </div>
                <div className="col-md-12 pt-3 address-content-container">
                  <AddressAutocomplete
                    getAddressData={getAddressDataTo}
                    shouldRunGetAddressDataCallback={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <button
                className="btn-success mt-2 mb-5 pt-2 pb-2 pr-4 pl-4"
                onClick={handleButtonClick}
              >
                Show Me Options!
              </button>
            </div>
          </div>
          <div className="row text-center m-3">
            <div className="col-md-6 mb-5">
              <MapLoader
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiG1j9c6Y1v76qmSWne_tAc_5TRiDQlLg"
                loadingElement={<div style={{ height: `100%` }} />}
                fromLat={state.latFrom}
                fromLon={state.lonFrom}
                toLat={state.latTo}
                toLon={state.lonTo}
                travelMode={state.travelMode}
                hanldeDistanceUpdate={hanldeDistanceUpdate}
              />
            </div>
            <div className="col-md-6 mb-5">
              <AccordionComp
                fromLat={state.latFrom}
                fromLon={state.lonFrom}
                toLat={state.latTo}
                toLon={state.lonTo}
                distance={state.distance}
                time={state.totalTimeTravel}
                getMode={getMode}
              />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-12 justify-content-center">
            <button
                className="btn-success mt-2 mb-5 pt-2 pb-2 pr-4 pl-4"
                onClick={testFn}
              >
                Let's Go!
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LetsGo;
