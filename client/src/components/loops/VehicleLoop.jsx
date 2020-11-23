import React from "react";
import { useUser } from "../../utils/UserVerify";
import Makes from "../../utils/makes"

const VehicleLoop = () => {
  const user = useUser();

  console.log("user.vehicles" ,user.vehicles);
  console.log("makesssss", Makes)

  const makesList = Makes.map((make) => <option key={make}>make</option>)
  console.log(makesList)

  const reptiles = ["alligator", "snake", "lizard"];

  const reptilesMap = reptiles.map((reptile) => <li key={reptile}>{reptile}</li>)
  console.log("reptiles", reptilesMap)
  return reptiles.map((reptile) => <li key={reptile}>{reptile}</li>);
};

export default VehicleLoop;
