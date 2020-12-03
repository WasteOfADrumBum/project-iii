import React from "react";
import { useUserContext } from "../../utils/UserContext";
import axios from "axios";

const LetsGoLoop = () => {
  const [{ places }, triggerUserReload] = useUserContext();
  // Handle Removal of Places from user.places array by ID
  const onRemove = async (id) => {
    if (!id) return;

    console.log("Removing ", id); // id being removed from array

    try {
      const token = localStorage.getItem("__token__");
      if (!token) throw new Error("No token saved");

      await axios.delete("/api/v1/users?places=" + id, {
        headers: { Authorization: "Bearer " + token },
      });

      triggerUserReload();
    } catch (error) {
      console.warn(error.message);
    }
  };

  // List item Format
  const Item = ({ item }) => (
    <option>
      {item.name} {item.street} {item.city} {item.state} {item.zip}
    </option>
  );

  return (
    <select id="from-location" name="from-location" style={{ width: "100%" }}>
      {places.map((item) => (
        <Item key={item._id} item={item} onRemove={onRemove} />
      ))}
    </select>
  );
};

export default LetsGoLoop;
