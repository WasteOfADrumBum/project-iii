import React from "react";
import { CurrentUserContext } from "../../utils/UserContext";

const VehicleLoop = () => {
  const {vehicles} = React.useContext(CurrentUserContext);
  console.log(vehicles);

    return (
      <div style={{maxHeight: "200px", overflowY: "auto"}}>
        {vehicles.map((item) => (
          <div key={item.make}>{item.model}</div>
        ))}
      </div>
    );
  }

export default VehicleLoop;
