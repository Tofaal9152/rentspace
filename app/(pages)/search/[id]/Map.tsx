"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MapComponent = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} 
      zoom={13}
      style={{ height: '400px', width: '100%' }} 
    >
      {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A marker at London.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default MapComponent;
