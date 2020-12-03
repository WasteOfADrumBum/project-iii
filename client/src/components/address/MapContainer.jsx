/*global google*/
import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
class Map extends Component {
  constructor(props) {
  super(props);
  this.state = {
    directions: null,
  };
}

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
    console.log("props", this.props)
    const origin = { lat: this.props.fromLat, lng: this.props.fromLon };
    const destination = { lat: this.props.toLat, lng: this.props.toLon };
    const travelMode = this.props.travelMode;
 
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode[travelMode]
      },
      (result, status) => {
        console.log("result", result)
        console.log("status", status)

        this.props.handleDistanceUpdate(result.routes[0].legs[0].distance, result.routes[0].legs[0].duration);

        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  render() {
    
    // if(this.state.directions !== null){
    //   this.props.handleDistanceUpdate(this.state.directions.routes[0].legs[0].distance, this.state.directions.routes[0].legs[0].duration);
    //   };

    const GoogleMapExample = withGoogleMap(() => (
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