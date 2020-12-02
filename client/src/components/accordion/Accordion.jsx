import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "../../assets/styles/accordion.scss";
import { useUserContext } from "../../utils/UserContext";

// (8.8 / (({ mpgcity } + { mpghwy }) / 2)) * { totalmiles } = CO2e

const AccordionComp = (props) => {
  const [user] = useUserContext();
  const totalMiles = parseInt(props.distance);
  console.log(props.distance);
  const userVehicleMpgCity = user.vehicles[0].mpgcity;
  const userVehicleMpgHwy = user.vehicles[0].mpghwy;
  console.log("acordion props", props);
  function number_format(val, decimals) {
    val = parseFloat(val);
    return val.toFixed(decimals);
  }

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle id="DRIVING" as={Card.Header} eventKey="0" onClick={props.getMode}>
            <h3>Use Your Vehicle</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="row">
                <div className="col-md-8 text-left ">
                  Your carbon footprint for this trip is:
                </div>
                <div className="col-md-4 text-right ">
                  <span>
                    {number_format(
                      (8.8 / ((userVehicleMpgCity + userVehicleMpgHwy) / 2)) *
                        totalMiles,
                      2
                    )}
                    &nbsp;kg CO2e
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:
                </div>
                <div className="col-md-4 text-right">{props.time}</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:
                </div>
                <div className="col-md-4 text-right">{props.distance}</div>
              </div>
              <div className="row mt-2 justify-content-center">
                <div className="col-lg-12">
                  <hr />
                  <p>
                    The average American’s energy-related carbon footprint is
                    16.6 metric tons of carbon dioxide (tCO2e) annually
                    according to the latest information from the U.S. Department
                    of Energy. 15% of which is from owning a car. On average an
                    american travels 11,224 miles annually in a car that's
                    averaging 23.4 miles per gallon.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* <Card>
          <Accordion.Toggle id="TRANSIT" as={Card.Header} eventKey="1" onClick={props.getMode}>
            <h3>Use Public Transportation</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your carbon footprint for this trip is:
                </div> */}
                {/* Grey Hound Bus: 9mpg avg 55 seat compacity */}
                {/* <div className="col-md-4 text-right">
                  {number_format(((8.8 / (9 / 2)) * totalMiles) / 55, 2)}
                  &nbsp;kg CO2e
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:
                </div>
                <div className="col-md-4 text-right">{props.time}</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:
                </div>
                <div className="col-md-4 text-right">{props.distance}</div>
              </div>
              <div className="row mt-2 justify-content-center">
                <div className="col-lg-12">
                  <hr />
                  <p>
                    A Greyhound Bus may only get 9mpg, but it can hold 55
                    passengers at once.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card> */}
        <Card>
          <Accordion.Toggle id="WALKING" as={Card.Header} eventKey="2" onClick={props.getMode}>
            <h3>Take A Walk</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your carbon footprint for this trip is:
                </div>
                {/* 0.0195 kg CO2/mile © https://www.globe.gov/explore-science/scientists-blog/archived-posts/sciblog/index.html_p=186.html*/}
                <div className="col-md-4 text-right">
                  {number_format(0.0195 * totalMiles, 2)}
                  &nbsp;kg CO2e
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:
                </div>
                <div className="col-md-4 text-right">{props.time}</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:
                </div>
                <div className="col-md-4 text-right">{props.distance}</div>
              </div>
              <div className="row mt-2 justify-content-center">
                <div className="col-lg-12">
                  <hr />
                  <p>Walking at 3 mph (4.8 km/hr) burns 250 kCal</p>
                  <p>
                    If you walk 3 mph, it would take 40 minutes to go 2 miles.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle id="BICYCLING" as={Card.Header} eventKey="3" onClick={props.getMode}>
            <h3>Ride Your Bike</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your carbon footprint for this trip is:
                </div>
                {/* 0.0085 kg CO2/mile © https://www.globe.gov/explore-science/scientists-blog/archived-posts/sciblog/index.html_p=186.html*/}
                <div className="col-md-4 text-right">
                  {number_format(0.0085 * totalMiles, 2)}
                  &nbsp;kg CO2e
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:
                </div>
                <div className="col-md-4 text-right">{props.time}</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:
                </div>
                <div className="col-md-4 text-right">{props.distance}</div>
              </div>
              <div className="row mt-2 justify-content-center">
                <div className="col-lg-12">
                  <hr />
                  <p>Riding a bicycle at 8 mph (12.8 kph) burns 280 kCal</p>
                  <p>
                    If you ride a bicycle at 8 mph, it would take 15 minutes to
                    go 2 miles.
                  </p>
                  <p>
                    <i>
                      Biking leaves less of a carbon footprint then walking due
                      to the amount of CO2 you exhale over the same distance.
                    </i>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default AccordionComp;
