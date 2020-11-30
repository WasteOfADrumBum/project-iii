import React, { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getZipCode,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import "../../assets/styles/addressautocomplete.scss";

const AddressAutocomplete = ({
  getAddressData,
  shouldRunGetAddressDataCallback,
}) => {
  /* States below will carry address information */
  const [coordinates, setCoordinates] = useState({});
  const [addressValue, setAddressValue] = useState("");
  const [zipCode, setZipCode] = useState("");
  /* --------- */
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
    setAddressValue(description);
    // Get latitude, longitude, and ZipCode
    getGeocode({ address: description })
      .then((results) => {
        console.log('reutls from geocode', results)
       return getLatLng(results[0])
      })
      .then(({ lat, lng }) => {
        console.log("Coordinates: ", { lat, lng });
        setCoordinates({
          lat: lat,
          lng: lng,
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    getGeocode({ address: description })
      .then((results) => getZipCode(results[0], false))
      .then((zipCode) => {
        console.log("ZipCode: ", zipCode);
        setZipCode(zipCode);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  /* callback to help provide address data to AddressModal component  */
  //shouldRunGetAddressDataCallback is set to true in AddressModal component , if shouldRunGetAddressDataCallback is absent/falsy the getAddressData Callback won't run. Just a way to prevent unpredictable errors in other parent components that render AddressAutocomplete but do not need the getAddressData callback function to run.
  if (shouldRunGetAddressDataCallback) {
    let splittedAddress = addressValue.split(", ");
    getAddressData({
      name: "Placeholder",
      lat: coordinates.lat,
      lon: coordinates.lng,
      zip: zipCode,
      street: splittedAddress[0],
      city: splittedAddress[1],
      state: splittedAddress[2],
    });
  }
  /* ----------- */
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
