import React from "react";
import { CurrentUserContext } from "../../utils/UserContext";

const PlacesLoop = () => {
  const {places} = React.useContext(CurrentUserContext);
  console.log(places);

    return (
      <div style={{maxHeight: "200px", overflowY: "auto"}}>
        {places.map((item) => (
          <div key={item.Name}>{item.address}</div>
        ))}
      </div>
    );
  }

export default PlacesLoop;
