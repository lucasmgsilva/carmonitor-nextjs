import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RTDB } from '../services/RTDB';
import { onValue } from 'firebase/database';
import { CarMarker } from '../components/CarMarker';
import { CarAreaSlider } from '../components/CarAreaSlider';
import { CarItem } from '../components/CarItem';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

const API_TOKEN = 'pk.eyJ1IjoibHVjYXNtZ3NpbHZhIiwiYSI6ImNreHF0aGVidDRlaGQybm80OWg2dzVoeXQifQ.exF-UiLvicFXXWKMkn4Kfg';

interface Region {
  latitude: number;
  longitude: number;
  zoom: number;
}

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
  const zoom = 17;
  const [region, setRegion] = useState<Region>();
  const [cars, setCars] = useState<Car[]>([]);
  

  useEffect(() => {
    if(!!cars && !region){
      if (cars[0]){
        setRegion({
          latitude: cars[0]?.location.lat,
          longitude: cars[0]?.location.lng,
          zoom
        });
      }
    }
  }, [cars, region])

  useEffect(() => {
    onValue(RTDB.carsReference, snapshot => {
      const updatedCars = [] as Car[];
      
      snapshot.forEach((child) => {
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
    <>
      <Head>
        <title>CarMonitor</title>
      </Head>

      <Box h={'70vh'}>
      {
        !!region && (
          <Map
            mapboxAccessToken={API_TOKEN}
            initialViewState={region}
            style={{flex: 1}}
            mapStyle='mapbox://styles/mapbox/streets-v11'
            ref={mapRef}
            scrollZoom={false}
            doubleClickZoom={false}
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
        )
      }
        <CarAreaSlider>
          {cars?.map((car, index) => (
            <CarItem
              key={index}
              plate={car?.id}
              speed={car.location.speed}
              onPress={() => handleCarItemClick(car?.location)}
            />
            ))
          }
        </CarAreaSlider>
      </Box>
    </>
  )
}

export default Home;