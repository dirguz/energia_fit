import React from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'

function Mapa() {
    const position=[5.718037,-72.925670]
  return (
    <>
      <MapContainer center={position} zoom={30} scrollWheelZoom={true} className='mapa'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Energia Fit <br /> Mercado Saludable
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Mapa