import React from 'react';
import PageImage from "../components/PageImage";
import swingIMG from "../images/swing.jpeg"
import Map from "../components/Map/Map";
import Title from "../components/Title";
import Gallery from "../components/Gallery/Gallery";
import styled from "styled-components";

const HomePage = () => {

    return (
        <>
            <PageImage img={swingIMG} max="true"/>
            <MapWrapper>
            <Map/>
            </MapWrapper>
            <Title text="Nasze Wyroby"/>
            <Gallery/>
        </>
    );
};

const MapWrapper = styled.div`
height: 50vh;
width: 100%;
margin-left: auto;
margin-right: auto;
`

export default HomePage;