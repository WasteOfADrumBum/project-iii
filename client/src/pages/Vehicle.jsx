import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Form, Col, Button } from "react-bootstrap";
import "../assets/styles/vehicle.scss";
import { useUserContext } from "../utils/UserContext";
import { useHistory } from "react-router-dom";
import Years from "../utils/year";
import vehicles from "./vehicle-in-pages.json";
import axios from "axios";

const Vehicle = () => {
  const history = useHistory();
  const [user] = useUserContext();
  const [makeState, setMakeState] = React.useState([]);
  const [modelState, setModelState] = React.useState([]);
  const [fuelState, setFuelState] = React.useState([]);
  const [engineState, setEngineState] = React.useState([]);
  const [transmissionState, setTransmissionState] = React.useState([]);
  const [chosenVehicleState, setChosenVehicleState] = React.useState({
    year: "",
    make: "",
    model: "",
    fueltype: "",
    cylinders: "",
    transmission: "",
  });

  // const [{ vehicles }, triggerUserReload] = useUserContext();

  function handleYearSelect(event) {
    const chosenYear = [];
    const makesToDisplay = [];
    const { name, value } = event.target;
    setChosenVehicleState({ ...chosenVehicleState, [name]: parseInt(value) });

    // Matching the key in vehicle.json with the value of the target, that's set to be the same as the key we want to look up
    vehicles.map((vehicle) => {
      if (vehicle[event.target.name] == [event.target.value]) {
        // If the vehicle year equals the value of the drop down we push it into the below array
        chosenYear.push(vehicle);
      }
    });

    // Filtering out duplicate values
    chosenYear.map((unique) => {
      // If the make of the vehicle is already in the below array it will not be added, which results in an array of unique values
      if (makesToDisplay.indexOf(unique.make) < 0) {
        makesToDisplay.push(unique.make);
      }
    });
    setMakeState(...makeState, makesToDisplay);
  }

  function handleMakeSelect(event) {
    const chosenMake = [];
    const modelsToDisplay = [];
    const { name, value } = event.target;
    vehicles.map((vehicle) => {
      if (
        vehicle[event.target.name] == [event.target.value] &&
        vehicle.year == chosenVehicleState.year
      ) {
        chosenMake.push(vehicle);
      }
    });
    chosenMake.map((unique) => {
      if (modelsToDisplay.indexOf(unique.model) < 0) {
        modelsToDisplay.push(unique.model);
      }
    });
    setModelState(...modelState, modelsToDisplay);
    setChosenVehicleState({ ...chosenVehicleState, [name]: value });
  }

  function handleModelSelect(event) {
    const chosenModel = [];
    const fuelToDisplay = [];
    const { name, value } = event.target;
    vehicles.map((vehicle) => {
      if (
        vehicle[event.target.name] == [event.target.value] &&
        vehicle.year == chosenVehicleState.year &&
        vehicle.make == chosenVehicleState.make
      ) {
        chosenModel.push(vehicle);
      }
    });
    chosenModel.map((unique) => {
      if (fuelToDisplay.indexOf(unique.fueltype) < 0) {
        fuelToDisplay.push(unique.fueltype);
      }
    });
    setFuelState(...fuelState, fuelToDisplay);
    setChosenVehicleState({ ...chosenVehicleState, [name]: value });
  }

  function handleFuelSelect(event) {
    const chosenFuel = [];
    const engineToDisplay = [];
    const { name, value } = event.target;
    vehicles.map((vehicle) => {
      if (
        vehicle[event.target.name] == [event.target.value] &&
        vehicle.year == chosenVehicleState.year &&
        vehicle.make == chosenVehicleState.make &&
        vehicle.model == chosenVehicleState.model
      ) {
        chosenFuel.push(vehicle);
      }
    });
    chosenFuel.map((unique) => {
      if (engineToDisplay.indexOf(unique.cylinders) < 0) {
        engineToDisplay.push(unique.cylinders);
      }
    });
    setEngineState(...engineState, engineToDisplay);
    setChosenVehicleState({ ...chosenVehicleState, [name]: value });
  }

  function handleEngineSelect(event) {
    const chosenEngine = [];
    const transmissionToDisplay = [];
    const { name, value } = event.target;
    vehicles.map((vehicle) => {
      if (
        vehicle[event.target.name] == [event.target.value] &&
        vehicle.year == chosenVehicleState.year &&
        vehicle.make == chosenVehicleState.make &&
        vehicle.model == chosenVehicleState.model &&
        vehicle.fueltype == chosenVehicleState.fueltype
      ) {
        chosenEngine.push(vehicle);
      }
    });
    chosenEngine.map((unique) => {
      if (transmissionToDisplay.indexOf(unique.transmission) < 0) {
        transmissionToDisplay.push(unique.transmission);
      }
    });
    setTransmissionState(...transmissionState, transmissionToDisplay);
    setChosenVehicleState({ ...chosenVehicleState, [name]: value });
  }

  function handleTransmissionSelect(event) {
    const { name, value } = event.target;

    vehicles.map((vehicle) => {
      if (
        vehicle[event.target.name] == [event.target.value] &&
        vehicle.year == chosenVehicleState.year &&
        vehicle.make == chosenVehicleState.make &&
        vehicle.model == chosenVehicleState.model &&
        vehicle.fueltype == chosenVehicleState.fueltype &&
        vehicle.cylinders == chosenVehicleState.cylinders
      ) {
        setChosenVehicleState({ ...chosenVehicleState, [name]: value });
      }
    });
  }

  function handleClick(event) {
    event.preventDefault();
    let vehicleToAdd;
    vehicles.map((vehicle) => {
      if (
        vehicle.year === chosenVehicleState.year &&
        vehicle.make === chosenVehicleState.make &&
        vehicle.model === chosenVehicleState.model &&
        vehicle.fueltype === chosenVehicleState.fueltype &&
        vehicle.cylinders === chosenVehicleState.cylinders &&
        vehicle.transmission === chosenVehicleState.transmission
      ) {
        vehicleToAdd = vehicle;
      }
    });
    AddVehicle(vehicleToAdd);
    history.push("/profile");
  }

  const AddVehicle = async (vehicleData) => {
    console.log("Data", vehicleData);
    console.log("user", user);
    if (vehicleData) {
      console.log("Vehicle Parameters: ", vehicleData);
      console.log("Adding to User: ", user.firstName, user._id);
      try {
        const token = localStorage.getItem("__token__");
        if (!token) throw new Error("No token saved");
        console.log("passed token error checking");

        await axios.patch(`/api/v1/users/updateVehicle/${user._id}`, vehicleData, {
          headers: { Authorization: "Bearer " + token },
        });
        console.log("Posted Vehicle Parameters: ", vehicleData);
        console.log("Posted  Adding to User: ", user.firstName, user._id);
      } catch (error) {
        console.warn(error.message);
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="vehicle-container p-5">
        <div className="vehicle-form-container">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-8 pt-5 pr-5 pl-5 text-center">
              <span>
                <b>
                  {user.firstName}, to tally up your annual transportation
                  footprint. We will need to consider your travel, including how
                  far you travel in a personal vehicle. For your vehicle usage,
                  if you travel more than 15,000 miles per year, it can make a
                  huge difference in your carbon footprint. To calculate your
                  footprint accurately, we'll need to know the make and model of
                  your vehicle. Depending on the type of vehicle, transmission,
                  fuel type, and cylinders you own will alter your score.
                </b>
              </span>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4 text-center"
              style={{ fontVariantCaps: "all-small-caps" }}
            >
              <h2>Tell me</h2>
              <h1>how do you</h1>
              <h1>get to work?</h1>
            </div>
            <div className="col-md-8 p-5">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      name="year"
                      onChange={handleYearSelect}
                      as="select"
                      placeholder="Choose..."
                    >
                      <option selected>Choose...</option>
                      {Years.map((year) => (
                        <option key={year}>{year}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridMake">
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                      name="make"
                      onChange={handleMakeSelect}
                      as="select"
                      placeholder="Chevrolet"
                    >
                      <option selected>Choose...</option>
                      {makeState.map((make) => {
                        return <option key={make}>{make}</option>;
                      })}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      name="model"
                      onChange={handleModelSelect}
                      as="select"
                      placeholder="Corvette"
                    >
                      <option selected>Choose...</option>
                      {modelState.map((model) => {
                        return <option key={model}>{model}</option>;
                      })}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFuelType">
                    <Form.Label>Fuel Type</Form.Label>
                    <Form.Control
                      name="fueltype"
                      onChange={handleFuelSelect}
                      as="select"
                      placeholder="gasoline"
                    >
                      <option selected>Choose...</option>
                      {fuelState.map((fuelType) => {
                        return <option key={fuelType}>{fuelType}</option>;
                      })}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridFirstEngine">
                    <Form.Label>Engine</Form.Label>
                    <Form.Control
                      name="cylinders"
                      onChange={handleEngineSelect}
                      as="select"
                      placeholder="8 cylinder"
                    >
                      <option selected>Choose...</option>
                      {engineState.map((engine) => {
                        return <option key={engine}>{engine}</option>;
                      })}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridTransmission">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Control
                      name="transmission"
                      onChange={handleTransmissionSelect}
                      as="select"
                      placeholder="Automatic"
                    >
                      <option selected>Choose...</option>
                      {transmissionState.map((transmission) => {
                        return (
                          <option key={transmission}>{transmission}</option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                {/* 
                // TODO: Make "next" buton relocate to /letsgo
                // TODO: Make "Skip" button relocate to /profile
                */}
                <Button variant="primary" type="submit" onClick={handleClick}>
                  Next
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Vehicle;
