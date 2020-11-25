import React from "react";
import { CurrentUserContext } from "../../utils/UserContext";

const VehicleLoop = () => {
  const {vehicles} = React.useContext(CurrentUserContext);
  console.log(vehicles);

    return (
      <div style={{maxHeight: "200px", overflowY: "auto"}}>
        {vehicles.map((item) => (
          <div key={item.make}>
            <button className="btn-warning mr-2 d-inline">Δ</button>
                <button className="btn-danger mr-2 d-inline">X</button>
                <p className="mr-2 d-inline">
                  {item.year} {item.make} {item.model}
                </p>
          </div>
        ))}
      </div>
    );
  }

export default VehicleLoop;
