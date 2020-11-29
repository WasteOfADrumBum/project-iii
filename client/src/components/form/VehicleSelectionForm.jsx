import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "../../assets/styles/vehicle.scss";
const vDB = require("./vehicle.json");
function updateYear() {
    const findYear = document.getElementsByClassName("selected-year");
    console.log(findYear.year.value)
    const selectYear = findYear.year.value;
}

// Year Array
const yearArr = [];
for (let i = 0; i < vDB.length; i++) {
  if (yearArr.indexOf(vDB[i].year === -1)) {
    yearArr.push(vDB[i].year);
  }
}
const Years = Array.from(new Set(yearArr));

// Make Array
const makeArr = [];
for (let i = 0; i < vDB.length; i++) {
  if (makeArr.indexOf(vDB[i].make === -1)) {
    makeArr.push(vDB[i].make);
  }
}
const Makes = Array.from(new Set(makeArr));

const VehilceSelectionForm = () => {
  return (
    <>
      <div className="vehicle-container p-5">
        <div className="vehicle-form-container">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-8 pt-5 pr-5 pl-5 text-center">
              <span>
                <b>
                  Hey there, to tally up your annual transportation footprint.
                  We will need to consider your travel, including how far you
                  travel in a personal vehicle. For your vehicle usage, if you
                  travel more than 15,000 miles per year, it can make a huge
                  difference in your carbon footprint. To calculate your
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
                      className="selected-year"
                      name="year"
                      as="select"
                      placeholder="1984"
                      onChange={updateYear}
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
                      as="select"
                      placeholder="Chevrolet"
                    >
                      {/* {Makes.filter((year) => year.includes(selectYear)).map(
                        (filteredMake) => (
                          <option>{filteredMake}</option>
                        )
                      )} */}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      name="model"
                      as="select"
                      placeholder="Corvette"
                    ></Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFuelType">
                    <Form.Label>Fuel Type</Form.Label>
                    <Form.Control
                      name="fueltype"
                      as="select"
                      placeholder="gasoline"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridFirstEngine">
                    <Form.Label>Engine</Form.Label>
                    <Form.Control
                      name="cylinders"
                      as="select"
                      placeholder="8 cylinder"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridTransmission">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Control
                      name="transmission"
                      as="select"
                      placeholder="Automatic"
                    ></Form.Control>
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
    </>
  );
};

export default VehilceSelectionForm;
