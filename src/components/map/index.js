import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import React, {Component} from 'react';


export class MapContainer extends Component {
 constructor(props) {
   super(props);

   this.state = {
     stores: [
       { latitude: -22.868561, longitude: -43.4487333, local: "Padre Miguel" },
     ]
 }

 }

 displayMarkers = () => {
  return this.state.stores.map((store, index) => {
    return <Marker key={index} id={index} position={{
      lat: store.latitude,
      lng: store.longitude
    }}
    />
  })
}


    render() {
      return (
  
        <Map
          google={this.props.google}
          zoom={7}
          initialCenter={{ lat:-22.9140693, lng:-43.5860663}}
        >
        </Map>
  
      );
    }
  }

  export default GoogleApiWrapper(
      (props) => ({
          apikey: 'AIzaSyC1Cy4VDUQQwvk6m79BhfPFADEmMZwW0wo',
      })
) (MapContainer)