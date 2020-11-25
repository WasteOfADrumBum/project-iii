import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Form, Col, Button } from "react-bootstrap";
import "../assets/styles/vehicle.scss";
import { CurrentUserContext } from "../utils/UserContext";
import { useHistory } from "react-router-dom";
import Years from "../utils/year";
import vehicles from "../utils/vehicle.json"
import axios from "axios";

// TODO: Caputre form data and store to project3_db's users.vehicles or from client/utils/vehice.json
// ! ↑↑↑ Bug: throwing 401 error
// ? Need to figure out how to grab all vehilce info with limited selected options
// TODO: Form currently populating but only selecting options given not one option from given array
// ? possibly need to .filter based on previous selection
// ? Need to figure out how to select vehicle from array given input and post that to user.vehilce
// ! Current problem is you can select a 1984 Ford Civic with 2 cylinder 10 speed transmission
// ! ↑↑↑ current form does not match array for correct output
const Vehicle = () => {
  const history = useHistory();
  const {user} = React.useContext(CurrentUserContext);

  // Set State to ""
  const chosenYear = []
  const chosenMake = []
  const makesToDisplay = []
  const chosenModel = []
  const modelsToDisplay = []
  const chosenFuel = []
  const fuelToDisplay = []
  const chosenEngine = []
  const engineToDisplay = []
  const chosenVehicle = []
  const transmissionToDisplay = []
  

  function handleYearSelect (event) {
    vehicles.map (vehicle => {
      if (vehicle[event.target.name] == [event.target.value]) {
        chosenYear.push(vehicle)
      }
    })
  }
  function handleMakeSelect (event) {
    chosenYear.map( vehicle => {
      if (vehicle[event.target.name] == [event.target.value]) {
        chosenMake.push(vehicle)
      }
    })
    chosenMake.map(unique => {
      if (modelsToDisplay.indexOf(unique.model) < 0) {
        modelsToDisplay.push(unique.model)
      }
    })
  }
  function handleModelSelect (event) {
    chosenMake.map( vehicle => {
      if (vehicle[event.target.name] == [event.target.value]) {
        chosenModel.push(vehicle)
      }
    })
    chosenModel.map(unique => {
      if (fuelToDisplay.indexOf(unique.fueltype) < 0) {
        fuelToDisplay.push(unique.fueltype)
      }
    })
  }

  function handleFuelSelect (event) {
    chosenModel.map(vehicle => {
      if (vehicle[event.target.name] == [event.target.value]) {
        chosenFuel.push(vehicle)
      }
    })
    chosenFuel.map(unique => {
      if (engineToDisplay.indexOf(unique.fueltype) < 0) {
        engineToDisplay.push(unique.fueltype)
      }
    })
  }

  function handleEngineSelect (event) {
    chosenFuel.map(vehicle => {
      if (vehicle[event.target.name] == [event.target.value]) {
        chosenEngine.push(vehicle)
      }
    })
    chosenEngine.map(unique => {
      if (transmissionToDisplay.indexOf(unique.transmission) < 0) {
        transmissionToDisplay.push(unique.transmission)
      }
    })
  }

  function handleTransmissionSelect (event) {
    chosenEngine.map(vehicle => {
      if (vehicle[event.target.name] == [event.target.value]) {
        chosenVehicle.push(vehicle)
      }
    })
  }



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
                  {user.firstName}, to tally up your annual transportation footprint. We will need
                  to consider your travel, including how far you travel in a
                  personal vehicle. For your vehicle usage, if you travel more
                  than 15,000 miles per year, it can make a huge difference in
                  your carbon footprint. To calculate your footprint accurately,
                  we'll need to know the make and model of your vehicle.
                  Depending on the type of vehicle, transmission, fuel type, and
                  cylinders you own will alter your score.
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
                      placeholder="1984"
                    >
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
                      {makesToDisplay.map((vehicle) => (
                        <option key={vehicle.make}>{vehicle.make}</option>
                      ))}
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
                      {modelsToDisplay.map((vehicle) => (
                        <option key={vehicle.model}>{vehicle.model}</option>
                      ))}
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
                      {fuelToDisplay.map((vehicle) => (
                        <option key={vehicle.fueltype}>{vehicle.fueltype}</option>
                      ))}
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
                      {engineToDisplay.map((vehicle) => (
                        <option key={vehicle.cylinders}>{vehicle.cylinders}</option>
                      ))}
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
                      {transmissionToDisplay.map((vehicle) => (
                        <option key={vehicle.transmission}>{vehicle.transmission}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                {/* 
                // TODO: Make "next" button relocate to /letsgo
                // TODO: Make "Skip" button relocate to /profile
                */}
                <Button
                  variant="primary"
                  type="submit"
                  // onClick={() => handleClick()}
                >
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
