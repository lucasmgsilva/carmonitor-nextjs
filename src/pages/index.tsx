import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RTDB } from '../services/RTDB';
import { onValue } from 'firebase/database';
import { CarMarker } from '../components/CarMarker';
import { CarAreaSlider } from '../components/CarAreaSlider';
import { CarItem } from '../components/CarItem';
import { Box, Flex } from '@chakra-ui/react';

const API_TOKEN = 'pk.eyJ1IjoibHVjYXNtZ3NpbHZhIiwiYSI6ImNreHF0aGVidDRlaGQybm80OWg2dzVoeXQifQ.exF-UiLvicFXXWKMkn4Kfg';

interface Location {
  lat: number;
  lng: number;
  speed: number;
}

interface Car {
  id: string;
  playAlarmSound: boolean;
  location: Location;
}

const Home: NextPage = () => {
  const mapRef = useRef(null) as any;
  const [lng, setLng] = useState(-49.079347);
  const [lat, setLat] = useState(-21.618926);
  const [zoom, setZoom] = useState(15);

  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    onValue(RTDB.carsReference, snapshot => {
      const updatedCars = [] as Car[];
      
      snapshot.forEach(child => {
        const newCar = {
          id: child.key,
          ...child.val(),
        };
        updatedCars.push(newCar);
        console.log('Car: ', newCar);
      })

      setCars(updatedCars);
    })
  }, [])

  function handleCarItemClick(location: Location) {
    mapRef.current?.flyTo({
      center: [location.lng, location.lat], 
      zoom, 
      speed: 0.75, 
      curve: 2, 
      essential: true})
  }

  return (
    <Box h={'70vh'}>
    <>
      <Map
        mapboxAccessToken={API_TOKEN}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom
        }}
        style={{flex: 1}}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        ref={mapRef}
        >
        {cars?.map((car, index) => (
          <CarMarker
          key={index}
          coordinate={{
            latitude: car?.location?.lat,
            longitude: car?.location?.lng,
          }}
          plate={car?.id}
          />
          ))}
      </Map>    
      <CarAreaSlider>
        <>
          {cars?.map((car, index) => (
            <CarItem
            key={index}
            plate={car?.id}
            speed={car.location.speed}
            onPress={() => handleCarItemClick(car?.location)}
            />
            ))}
        </>
      </CarAreaSlider>
    </>
    </Box>
  )
}

export default Home;