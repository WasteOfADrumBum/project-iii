import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Form, Col } from "react-bootstrap";
import "../assets/styles/letsgo.scss";

// TODO: Dropdown placeholder values to be replaced with saved locations from database

const LetsGo = () => {
  return (
    <>
      <NavBar />
      <div className="letsgo-container p-5">
        <div className="row text-center p-5">
          <div className="col-md-12">
            <h1>Where are we going today?</h1>
            <p>Select from one of your places, or enter a new address!</p>
          </div>
        </div>
        <div className="row text-center p-5 letsgo-form-container">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  <label for="from-location">From:</label>
                </h2>
              </div>
              <div className="col-md-12">
                <select
                  id="from-location"
                  name="from-location"
                  style={{ width: "100%" }}
                >
                  <option value="placeholder">Placeholder</option>
                </select>
              </div>
              <div className="col-md-12">
                <form>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  <label for="to-location">To:</label>
                </h2>
              </div>
              <div className="col-md-12">
                <select
                  id="to-location"
                  name="to-location"
                  style={{ width: "100%" }}
                >
                  <option value="placeholder">Placeholder</option>
                </select>
              </div>
              <div className="col-md-12">
                <form>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button className="btn-success pt-2 pb-2 pr-4 pl-4">
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
