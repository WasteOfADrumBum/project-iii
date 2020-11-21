import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
const GOOGLE_MAPS_API_KEY = "secret key location"

const MapContainer = (props) => {
  let [state, setstate] = React.useState({
    // stateful props
  })
  
  const {places, latitude, longitude, google} = this.props;
  return ( 
    <Map google = {google}
      initialCenter = {{
        lat: Number(latitude),
        lng: Number(longitude),
      }}
      onClick = {this.maplicked}
      zoom={10}>

      {
        places.length ? places.map(place => {
          return(
            <Marker key={place.id}
              name={place.location.name}
              onClick={this.MarkerClick}
              postition={{lat: place.location.latitude, lng: place.location.longitude}} />
          )
        })
         : null
      }

    <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showInfoWindow}>
        <div>
          <a href=""><h3>{this.state.selectedPlace.name}</h3></a>
        </div>

    </InfoWindow>

    </Map>
  )
  
}



export default GoogleApiWrapper({apiKey: (GOOGLE_MAPS_API_KEY)})(MapContainer)