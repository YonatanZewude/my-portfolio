import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import dotenv from 'dotenv';

dotenv.config();

const containerStyle = {
  width: '100%',
  height: '200px'
};

const center = {
  lat: 59.2861122,
  lng: 18.09326
};

const Map: React.FC = () => {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!googleMapsApiKey) {
      console.error("Google Maps API key is missing.");
      return;
    }

    const loader = new Loader({
      apiKey: googleMapsApiKey,
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: center,
          zoom: 10
        });

        new window.google.maps.Marker({
          position: center,
          map: map
        });
      }
    });
  }, [googleMapsApiKey]);

  if (!googleMapsApiKey) {
    return <div>Error: Google Maps API key is missing.</div>;
  }

  return <div ref={mapRef} style={containerStyle}></div>;
};

export default Map;
