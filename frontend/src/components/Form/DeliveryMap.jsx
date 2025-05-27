import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Perbaiki ikon bawaan leaflet agar tidak hilang
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ResizeMap = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);
  return null;
};



const DeliveryMap = ({ delivery, userLocation, address }) => {
  const targetLocation = { lat: -6.322195, lng: 106.979335 };

  if (delivery === "Dijemput" && userLocation) {
    return (
      <div className="mt-4">
        <p className="font-medium mb-2">Lokasi Anda (Dijemput):</p>
        <p className="text-sm mb-2">{address}</p>
        <MapContainer center={userLocation} zoom={15} scrollWheelZoom={true} dragging={true} style={{ height: "300px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={userLocation}>
            <Popup>Lokasi Anda</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }

  if (delivery === "Diantar") {
    return (
      <div className="mt-4">
        <p className="font-medium mb-2">Lokasi Tempat Pengumpulan Sampah:</p>
        <MapContainer center={targetLocation} zoom={15} scrollWheelZoom={true} dragging={true} style={{ height: "300px", width: "100%" }}>
          <ResizeMap />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={targetLocation}>
            <Popup>TPST Sampis</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }

  return null;
}

export default DeliveryMap
