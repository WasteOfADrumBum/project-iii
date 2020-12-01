import React from "react";
import { useUserContext } from "../../utils/UserContext";
import axios from "axios";

const VehicleLoop = () => {
  const [{ vehicles }, triggerUserReload] = useUserContext();
  // Handle Removal of Vehicle from user.vehiceles array by ID
  const onRemove = async (id) => {
    if (!id) return;

    console.log("Removing ", id); // id being removed from array

    try {
      const token = localStorage.getItem("__token__");
      if (!token) throw new Error("No token saved");

      await axios.delete("/api/v1/users?vehicle=" + id, {
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
        {item.year} {item.make} {item.model}
      </p>
    </div>
  );

  return (
    <div style={{ maxHeight: "200px", overflowY: "auto" }}>
      {vehicles.map((item) => (
        <Item key={item._id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default VehicleLoop;
