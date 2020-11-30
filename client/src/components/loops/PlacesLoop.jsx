import React from "react";
import { useUserContext } from "../../utils/UserContext";
import axios from "axios";

const PlacesLoop = () => {
  const [{ places }, triggerUserReload] = useUserContext();
  // const { places } = React.useContext(CurrentUserContext);
  // const [list, setList] = React.useState(places);

  // Handle Removal of Places from user.places array by ID
  const onRemove = async (id) => {
    if (!id) return;

    console.log("Removing ", id); // id being removed from array

    try {
      const token = localStorage.getItem("__token__");
      if (!token) throw new Error("No token saved");

      await axios.delete("/api/v1/users?place=" + id, {
        headers: { Authorization: "Bearer " + token },
      });

      triggerUserReload();
    } catch (error) {
      console.warn(error.message);
    }
  };

  // List item Format
  const Item = ({ item }) => (
    <div>
      <button className="btn-warning mr-2 d-inline" disabled="disabled">
        Δ
      </button>
      <button
        className="btn-danger mr-2 d-inline"
        type="button"
        onClick={() => onRemove(item._id)}
      >
        X
      </button>
      <p className="mr-2 d-inline">
        <b>{item.name}</b>
      </p>
      <p className="d-inline">
        {item.street} {item.city} {item.state} {item.zip}
      </p>
    </div>
  );

  return (
    <div style={{ maxHeight: "200px", overflowY: "auto" }}>
      {places.map((item) => (
        <Item key={item._id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default PlacesLoop;
