import React from "react";
import { CurrentUserContext } from "../../utils/UserContext";

const PlacesLoop = () => {
  const {places} = React.useContext(CurrentUserContext);
  console.log(places);

    return (
      <div style={{maxHeight: "200px", overflowY: "auto"}}>
        {places.map((item) => (
          <div key={item._id}>
            <button className="btn-warning mr-2 d-inline">Δ</button>
                <button className="btn-danger mr-2 d-inline">X</button>
                <p className="mr-2 d-inline">
                  <b>{item.name}</b>
                </p>
                <p className="d-inline">
                {item.street} {item.city} {item.state} {item.zip}
                </p>
          </div>
        ))}
      </div>
    );
  }

export default PlacesLoop;
