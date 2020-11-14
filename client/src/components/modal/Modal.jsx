import React, { useState } from "react";
import AddressAutocomplete from "../address/AddressAutocomplete";
import { Modal, Button } from "react-bootstrap";
import "../../assets/styles/modal.scss"

const AddressModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter A New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddressAutocomplete />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddressModal;
