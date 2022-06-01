import { useRef } from "react";
import { Marker as MarkerMB } from "react-map-gl";
import { Icon, IconArea } from "./style";

interface Coordinate {
    latitude: number;
    longitude: number;
  }
  
  interface MarkerProps {
    coordinate: Coordinate;
    plate: string;
  }

  export const CarMarker = function ({coordinate, plate}: MarkerProps) {
    //const markerRef = useRef<MarkerMB>();
  
    return (
      <MarkerMB 
        latitude={coordinate?.latitude} 
        longitude={coordinate?.longitude} 
        //ref={markerRef}
        >
        <IconArea>
          <Icon size={35} src={'/assets/car.png'} />
          <Icon size={10} src={'/assets/triangle.png'} />
        </IconArea>
        {/* <CarCallout plate={plate} markerRef={markerRef} /> */}
      </MarkerMB>
    );
  };
  