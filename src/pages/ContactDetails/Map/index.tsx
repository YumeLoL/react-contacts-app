import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

interface Imap {
    lat: number;
    lng: number;
}

const Map = ({geo}:any) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center:Imap = {
    lat: + geo.lat,
    lng: + geo.lng
  };
  console.log(center)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={center}
      zoom={10}
      onLoad={onLoad}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
