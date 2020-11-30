import React from "react";
import axios from "axios";
import { CurrentUserContext } from "../../utils/UserContext";

const PlacesLoop = () => {
  const { places } = React.useContext(CurrentUserContext);
  const [list, setList] = React.useState(places);

  function handleRemove(_id) {
    if (_id) {
      console.log("Removing ", _id); // id being removed from array
      try {
        const token = localStorage.getItem("__token__");
        // ! _id is vehicle id and needs to be user id
        // May have to solve id issue in route
        let userId = _id;
        // ! Need route for deleting places
        const response = axios.delete(`/api/v1/users/updatePlaces/${userId}`, {
          headers: { Authorization: "Bearer " + token },
        });
        console.log("Places Remove Response: ", response);
      } catch (error) {
        console.log(error);
      }
    }
    const newList = list.filter((item) => item._id !== _id);
    setList(newList);
  }

  const List = ({ list, onRemove }) => (
    <div style={{ maxHeight: "200px", overflowY: "auto" }}>
      {places.map((item) => (
        <Item key={item._id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );

  const Item = ({ item, onRemove }) => (
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

  return <List list={list} onRemove={handleRemove} />;
};

export default PlacesLoop;
