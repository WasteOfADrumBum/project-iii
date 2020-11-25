import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "../../assets/styles/accordion.scss";
import { CurrentUserContext } from "../../utils/UserContext";

// (8.8 / (({ mpgcity } + { mpghwy }) / 2)) * { totalmiles } = CO2e

const AccordionComp = () => {
  const {vehicles} = React.useContext(CurrentUserContext);
  const totalMiles = 20;
  const userVehilceMpgCity = vehicles[0].mpgcity;
  const userVehilceMpgHwy = vehicles[0].mpghwy;

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
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
                    {(8.8 / ((userVehilceMpgCity + userVehilceMpgHwy) / 2) *
                      totalMiles)}
                    kg CO2e
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:
                </div>
                <div className="col-md-4 text-right">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:
                </div>
                <div className="col-md-4 text-right">#.## Miles</div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>Use Public Transportation</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your carbon footprint for this trip is:
                </div>
                {/* Grey Hound Bus: 9mpg avg 55 seat compacity */}
                <div className="col-md-4 text-right">
                  {((8.8 / (9 / 2)) * totalMiles) / 55}
                  kg CO2e
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:
                </div>
                <div className="col-md-4 text-right">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:
                </div>
                <div className="col-md-4 text-right">#.## Miles</div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12 text-left">
                  A Greyhound Bus may only get 9mpg, but it can hold 55
                  passengers at once.
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <h3>Take A Walk</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your carbon footprint for this trip is:
                </div>
                {/* 0.0195 kg CO2/mile © https://www.globe.gov/explore-science/scientists-blog/archived-posts/sciblog/index.html_p=186.html*/}
                <div className="col-md-4 text-right">{0.0195 * totalMiles}</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:
                </div>
                <div className="col-md-4 text-right">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:
                </div>
                <div className="col-md-4 text-right">#.## Miles</div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12 text-left">
                  Walking at 3 mph (4.8 km/hr) burns 250 kCal
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-left">
                  If you walk 3 mph, it would take 40 minutes to go 2 miles.
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <h3>Ride Your Bike</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your carbon footprint for this trip is:
                </div>
                {/* 0.0085 kg CO2/mile © https://www.globe.gov/explore-science/scientists-blog/archived-posts/sciblog/index.html_p=186.html*/}
                <div className="col-md-4 text-right">{0.0085 * totalMiles}</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:
                </div>
                <div className="col-md-4 text-right">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:
                </div>
                <div className="col-md-4 text-right">#.## Miles</div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12 text-left ">
                  Riding a bicycle at 8 mph (12.8 kph) burns 280 kCal
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-left ">
                  If you ride a bicycle at 8 mph, it would take 15 minutes to go
                  2 miles.
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12 text-left ">
                  <i>
                    Biking leaves less of a carbon footprint then walking due to
                    the amount of CO2 you exhale over the same distance.
                  </i>
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
