import React from 'react';
import PageImage from "../components/PageImage";
import ContactIMG from "../images/contact.jpg";
import Contact from "../components/Contact";
import Map from "../components/Map/Map";

const ContactPage = () => {
    return (
        <>
            <PageImage img={ContactIMG} max={false}/>
            <Map/>
            <Contact/>
        </>
    );
};

export default ContactPage;