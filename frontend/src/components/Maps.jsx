import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Atur ulang ikon bawaan Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Komponen untuk mengatasi masalah resize map dalam container dinamis
const ResizeMap = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);
  return null;
};

const Maps = () => {
  const bantarGebang = { lat: -6.329383, lng: 106.9768 };

  return (
    <section id="about" className="py-16  lg:py-32">
      <div className="container">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
            <p className="text-xs font-bold text-green-900">LOKASI</p>
          </div>
          <p className="mb-2 text-5xl font-bold text-ink">Lokasi Sampis</p>
          <p className="text-lg font-extralight text-wolf">
            Lokasi Sampis di Indonesia
          </p>
        </div>
        <div className="aspect-video h-[500px] w-full rounded-lg overflow-hidden shadow-md relative z-0">
          <MapContainer
            center={bantarGebang}
            zoom={15}
            scrollWheelZoom={true}
            dragging={true}
            style={{ height: "100%", width: "100%" }}
          >
            <ResizeMap />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={bantarGebang}>
              <Popup>Markas Sampis</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Maps;
