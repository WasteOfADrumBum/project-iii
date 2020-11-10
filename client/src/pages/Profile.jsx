import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import AddressForm from "../components/address/addressForm";

const Profile = () => {
  return (
    <>
      <NavBar />
        <div className="container">Profile Page</div>
      <AddressForm />
      <Footer />
    </>
  );
};

export default Profile;