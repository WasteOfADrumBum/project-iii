import { Accordion, Card } from "react-bootstrap";
import "../../assets/styles/accordion.scss";

const AccordionComp = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Use Your Vehicle
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="row">
                <div className="col-md-8">
                  Your carbon footprint for this trip is:{" "}
                </div>
                <div className="col-md-4">###</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  Your total commute time for this trip is:{" "}
                </div>
                <div className="col-md-4">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  Your total distance for this trip is:{" "}
                </div>
                <div className="col-md-4">#.## Miles</div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Use Public Transportation
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="row">
                <div className="col-md-8">
                  Your carbon footprint for this trip is:{" "}
                </div>
                <div className="col-md-4">###</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  Your total commute time for this trip is:{" "}
                </div>
                <div className="col-md-4">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  Your total distance for this trip is:{" "}
                </div>
                <div className="col-md-4">#.## Miles</div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Take A Walk
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className="row">
                <div className="col-md-8">
                  Your carbon footprint for this trip is:{" "}
                </div>
                <div className="col-md-4">###</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  Your total commute time for this trip is:{" "}
                </div>
                <div className="col-md-4">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  Your total distance for this trip is:{" "}
                </div>
                <div className="col-md-4">#.## Miles</div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Ride Your Bike
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <div className="row">
                <div className="col-md-8">
                  Your carbon footprint for this trip is:{" "}
                </div>
                <div className="col-md-4">###</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  Your total commute time for this trip is:{" "}
                </div>
                <div className="col-md-4">##:##</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  Your total distance for this trip is:{" "}
                </div>
                <div className="col-md-4">#.## Miles</div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default AccordionComp;
