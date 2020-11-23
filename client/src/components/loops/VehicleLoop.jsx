import React from "react";
import { useUser } from "../../utils/UserVerify";

const VehicleLoop = () => {
  const user = useUser();

  console.log(user.vehicles);

  const reptiles = ["alligator", "snake", "lizard"];

  return reptiles.map((reptile) => <li key={reptile}>{reptile}</li>);
};

export default VehicleLoop;
