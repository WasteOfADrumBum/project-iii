import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import AddressForm from "../components/address/addressForm";

const AddressPage = () => {
  return (
    <>
      <NavBar />
      <div className="container p-5 text-center">
        <div className="row">
          <div className="col-md-12 mb-5"><h1>Save an Address</h1></div>
        </div>
        <AddressForm />
      </div>
      <Footer />
    </>
  );
};

export default AddressPage;
