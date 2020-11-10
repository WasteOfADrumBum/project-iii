import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Form, Col, Button } from "react-bootstrap";
import "../assets/styles/vehicle.scss"

// TODO: Caputre form data and store to Database

const Vehicle = () => {
  return (
    <>
      <NavBar />
      <div className="vehicle-container p-5">
        <div className="row">
          <div className="col-md-4"/>
          <div className="col-md-8 p-5">
            <p>
              Explination of how we can mose accuratly display the user's
              footprint impact by getting their vehicle information.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center"><h2>Tell me</h2><h1>how you get to work:</h1></div>
          <div className="col-md-8 vehicle-form-container p-5">
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
                      <option>Manuel</option>
                      <option>Automatic</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                  Next
                </Button>
              </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vehicle;
