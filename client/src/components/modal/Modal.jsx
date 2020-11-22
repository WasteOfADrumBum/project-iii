import React, { useState } from "react";
import AddressAutocomplete from "../address/AddressAutocomplete";
import { Modal, Button } from "react-bootstrap";
import "../../assets/styles/modal.scss"

const AddressModal = () => {
  //front end code to grab address split address
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //getAddressData is a callback that gets the addressData from the AddressAutocomplete component and saves it to addressInfo
  let addressInfo;
  const getAddressData = (addressData) => {
    if(addressData.lat && addressData.lon && addressData.zip && addressData.street && addressData.city && addressData.state){
      addressInfo = addressData;
    }
  }

  //handleSaveChanges will make a request to the backend api to save the address to places in the UserInfo and closes the modal
  const handleSaveChanges = () => {
    if(addressInfo){
      console.log(addressInfo) //console logs the addressInfo object which contains the data to be sent to the database

    //Close Modal
    handleClose() 
    }
  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        {/* // on click handle save */}

        {/* //post content to project3db.users.places */}
        <Modal.Header closeButton>
          <Modal.Title>Enter A New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddressAutocomplete getAddressData={getAddressData} shouldRunGetAddressDataCallback={true} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddressModal;
