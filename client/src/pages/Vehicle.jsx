import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Form, Col, Button } from "react-bootstrap";
import "../assets/styles/vehicle.scss";
import { checkUser } from "../utils/UserVerify";

// TODO: Caputre form data and store to project3_db's users.vehicles
// TODO: Make form a componenet and populate it with data from project3_db's VehicleInfo Collection

const Vehicle = () => {
  React.useEffect(() => {
    checkUser();
  }, []);

  if (!localStorage.getItem("__token__")) {
    window.location.href = "./login";
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
                  To tally up your annual transportation footprint. We will need
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
                  <Form.Group as={Col} controlId="formGridMake">
                    <Form.Label>Make</Form.Label>
                    <Form.Control type="text" placeholder="Chevrolet" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" placeholder="Corvette" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="year" placeholder="1964" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstEngine">
                    <Form.Label>Engine</Form.Label>
                    <Form.Control as="select" placeholder="8 cylinder - Gas">
                      <option>4 cylinder - Gas</option>
                      <option>6 cylinder - Gas</option>
                      <option>8 cylinder - Gas</option>
                      <option>8 cylinder- Diesel</option>
                      <option>Electic Motor</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridTransmission">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Control as="select">
                      <option>Manual</option>
                      <option>Automatic</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                {/* 
                // TODO: Make "next" button relocate to /letsgo
                // TODO: Make "Skip" button relocate to /profile
                */}
                <Button variant="primary" type="submit">
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
