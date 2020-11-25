/*global google*/
import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

// TODO: Replace origion and destination with lat and lgn from Adderess Auto Complete values
// TODO: Replace travelMode: google.maps.TravelMode.DRIVING with mode of transportation from Accordion

class Map extends Component {
  state = {
    directions: null
  };

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: 35.7686092, lng: -78.6369899 };
    const destination = { lat: 35.7731053, lng: -78.6411849 };
 
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >
        <DirectionsRenderer
          directions={this.state.directions}
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
}

export default Map;