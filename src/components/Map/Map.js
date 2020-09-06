import React from 'react';
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const Map = () => {

    const defaultCenter = {
        center: {
            lat: 51.363838,
            lng: 19.3629877
        },
        zoom: 15
    };


    return (
            <GoogleMapReact
            bootstrapURLKeys={process.env.GOOGLE_MAPS_API}
            defaultCenter={defaultCenter.center}
            defaultZoom={defaultCenter.zoom}
            >
                <LocationPin lat={51.363838}
                        lng={19.3629877}
                        text="Meble Ogrodowe (Random location)"/>
            </GoogleMapReact>
    );
};



export default Map;