import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';


var myIcon = L.icon({
  iconUrl :  'https://map.longdo.com/mmmap/images/pin_mark.png',
  iconSize : [25,41],
  iconAnchor : [12.5,41],
  popupAnchor : [0,-41]
});


class App extends Component {
  state = {
    location: {
    lat: 7.899979,
    lng: 98.338571,
    },
    zoom: 13,
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location:{
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

      });
      
    });
  }


  render() {
    
    const position = [this.state.location.lat, this.state.location.lng]
    return (

      <div className="map">
      <h1><center>Flooding Map and Flood Avoidance Algorithms</center></h1>
      <button type="button" className="btn btn-primary">Flooding Map</button>
      <button type="button" class="btn btn-success">Vector Field</button>
      <button type="button" class="btn btn-danger">Animation Model</button>
      <button type="button" class="btn btn-warning">Area Selection</button>
      <Map className="map" center={position} zoom={this.state.zoom}>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker 
      
       position={position}
       icon = {myIcon}>

          <Popup>
            ชื่อถนน: วิชิตสงคราม <br /> ระดับความสูงน้ำ(เฉลี่ย): 5 มม. <br /> ประเภทรถยนต์ที่ผ่านได้: รถยนต์ทั่วไป
          </Popup>
      </Marker>
    </Map>
    </div>
    );      
  }
}

export default App;