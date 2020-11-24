import React from "react";
import { useUser } from "../../utils/UserVerify";

// ! Bug: user is undefined at first then it loops 2 more times where it is defined 
// ! The initial undefined array throws an error for the vDB.length 

const VehicleLoop = () => {
  const user = useUser();

  console.log("user.firstName", user.firstName);
  console.log("user.vehicles", user.vehicles);

  // const vDB = user.vehicles;
  const Vehicles = user.vehicles

  // const vehicleArr = [];
  // for (let i = 0; i < vDB.length; i++) {
  //   // console.log(vehicleArr.indexOf(vDB[i].vehicle));
  //   if (vehicleArr.indexOf(vDB[i].vehicle === -1)) {
  //     vehicleArr.push(vDB[i].vehicle);
  //   }
  // }

  // const Vehicles = Array.from(new Set(vehicleArr));

  return (
    <>
      {/* {Vehicles.map((vehicle) => (
        <option key={vehicle}>{vehicle}</option>
      ))} */}
    </>
  );
};

export default VehicleLoop;
