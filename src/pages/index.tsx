import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/* mapboxgl.accessToken = ''; */
const API_TOKEN = 'pk.eyJ1IjoibHVjYXNtZ3NpbHZhIiwiYSI6ImNreHF0aGVidDRlaGQybm80OWg2dzVoeXQifQ.exF-UiLvicFXXWKMkn4Kfg';

const Home: NextPage = () => {
  const map = useRef(null) as any;
  const [lng, setLng] = useState(-49.079347);
  const [lat, setLat] = useState(-21.618926);
  const [zoom, setZoom] = useState(15);

  return (
    <Map
      mapboxAccessToken={API_TOKEN}
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle='mapbox://styles/mapbox/streets-v11'
    >
      <Marker
        longitude={lng}
        latitude={lat}
      >

      </Marker>
    </Map>      
  )
}

export default Home;