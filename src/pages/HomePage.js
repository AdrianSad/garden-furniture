import React from 'react';
import PageImage from "../components/PageImage";
import swingIMG from "../images/swing.jpeg"
import Map from "../components/Map/Map";
import Title from "../components/Title";
import Gallery from "../components/Gallery/Gallery";
const HomePage = () => {
    return (
        <>
            <PageImage img={swingIMG}/>
            <Map/>
            <Title text="Nasze Wyroby"/>
            <Gallery/>
        </>
    );
};

export default HomePage;