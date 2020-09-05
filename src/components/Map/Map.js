import React from 'react';
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
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
        <MapWrapper>
            <GoogleMapReact
            bootstrapURLKeys={process.env.GOOGLE_MAPS_API}
            defaultCenter={defaultCenter.center}
            defaultZoom={defaultCenter.zoom}
            >
                <LocationPin lat={51.363838}
                        lng={19.3629877}
                        text="Meble Ogrodowe (Random location)"/>
            </GoogleMapReact>
        </MapWrapper>
    );
};

const MapWrapper = styled.div`
height: 50vh;
width: 100%;
margin-left: auto;
margin-right: auto;
`;

export default Map;