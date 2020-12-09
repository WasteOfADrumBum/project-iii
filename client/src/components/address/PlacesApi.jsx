import React from "react";

function PlacesApi() {
  const [state, setState] = React.useState({
    search: "",
    predictions: [],
  });

  React.useEffect(() => {
    // ! Bug: Google API key not hiiden
    // ? Recent changes make exposed Google API key in public index.html prevent Heoku from rendering information contained in root
    // Note: content_security_policy in package.json and Meta Data no longer a fix for this issue due to google's new security measures
    // TODO: Convert results URL to a backend rout call that uses axios & ajax
    // User input → front-end PlacesApi → routes our server → request from google →→
    // →→ results from google → our server → send to PlacesApi on front-end → return info to user
    const getSearch = async () => {
      try {
        let results = await fetch(
          `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?=input=${state.search}&key=${process.env.REACT_APP_GOOGLE_API}`
        );
        results = await results.json();
        console.log(results);

        setState((state) => ({
          ...state,
          predictions: results.predictions,
        }));
      } catch (error) {
        console.warn(error.message);
      }
    };
    getSearch();
  }, [state.search]);

  return (
    <div className="PlacesApi">
      <input
        type="text"
        onChange={(e) => setState({ ...state, search: e.target.value })}
      />
      {state.predictions.map((p, i) => (
        <div key={i + "-prediction"}></div>
      ))}
    </div>
  );
}

export default PlacesApi;
