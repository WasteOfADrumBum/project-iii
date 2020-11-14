import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getZipCode
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import "../../assets/styles/addressautocomplete.scss";

const AddressAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    
    setValue(description, false);
    clearSuggestions();

    // Get latitude, longitude, and ZipCode
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    getGeocode({ address: description })
      .then((results) => getZipCode(results[0], false))
      .then((zipCode) => {
        console.log("ZipCode: ", zipCode)
    })
      .catch((error) => {
        console.log("Error: ", error)
      });
    
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Begin typing an address"
        autoComplete="new-password"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

export default AddressAutocomplete;
