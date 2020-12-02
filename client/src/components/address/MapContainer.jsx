/*global google*/
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

const Map = (props) => {
  const [state, setState] = React.useState({
    directions: null,
  });

  const directionsService = new google.maps.DirectionsService();
  console.log("props", props)
  const origin = { lat: props.fromLat, lng: props.fromLon };
  const destination = { lat: props.toLat, lng: props.toLon };
  const travelMode = props.travelMode;

  directionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode[travelMode]
    },
    (result, status) => {
      console.log("result", result)
      console.log("status", status)

      props.hanldeDistanceUpdate(result.routes[0].legs[0].distance, result.routes[0].legs[0].duration)

      if (status === google.maps.DirectionsStatus.OK) {
        setState({
          directions: result
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    }
  );
    
  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
      defaultZoom={13}
    >
      <DirectionsRenderer
        directions={state.directions}
      />
    </GoogleMap>
  ));

  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: "500px", width: "100%", position: "relative",
        overflow: "hidden"}} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default Map;