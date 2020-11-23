import { Accordion, Card } from "react-bootstrap";
import "../../assets/styles/accordion.scss";

const AccordionComp = () => {
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
                  Your carbon footprint for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right ">###</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:{" "}
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
                  Your carbon footprint for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">###</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">#.## Miles</div>
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
                  Your carbon footprint for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">###</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">#.## Miles</div>
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
                  Your carbon footprint for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">###</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total commute time for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8 text-left">
                  Your total distance for this trip is:{" "}
                </div>
                <div className="col-md-4 text-right">#.## Miles</div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default AccordionComp;
