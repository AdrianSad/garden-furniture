import React from 'react';
import styled from "styled-components";
import buda1 from "../images/budy/1.jpg"
import buda2 from "../images/budy/2.jpg"
import buda3 from "../images/budy/3.jpg"
import buda4 from "../images/budy/4.jpg"
import plac1 from "../images/place-zabaw/1.jpg"
import plac2 from "../images/place-zabaw/2.jpg"
import plac3 from "../images/place-zabaw/3.jpg"
import plac4 from "../images/place-zabaw/4.jpg"
import altana1 from "../images/altany/1.jpg"
import altana2 from "../images/altany/2.jpg"
import altana3 from "../images/altany/3.jpg"
import altana4 from "../images/altany/4.jpg"
import pozostale1 from "../images/pozostałe/1.jpg"
import pozostale2 from "../images/pozostałe/2.jpg"
import pozostale3 from "../images/pozostałe/3.jpg"
import pozostale4 from "../images/pozostałe/4.jpg"
import pozostale5 from "../images/pozostałe/5.jpg"
import pozostale6 from "../images/pozostałe/6.jpg"
import pozostale7 from "../images/pozostałe/7.jpg"
import pozostale8 from "../images/pozostałe/8.jpg"

import Title from "../components/Title";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GalleryRow from "../components/Gallery/GalleryRow"; // requires a loader

const GalleryPage = () => {

    const imagesArr = [
        {
            id: 1,
            desc: "Drewniana buda dla psa"
        },
        {
            id: 2,
            desc: "Hamak stojący"
        },
        {
            id: 3,
            desc: "Buda dla psa"
        },
        {
            id: 4,
            desc: "Jednoosobowy fotel wiszący"
        },
        {
            id: 5,
            desc: "Dwuosobowy fotel wiszący"
        },
        {
            id: 6,
            desc: "Altana zewnętrzna"
        },
        {
            id: 7,
            desc: "Plac zabaw dla dzieci"
        },
        {
            id: 8,
            desc: "Plac zabaw dla dzieci"
        },
        {
            id: 9,
            desc: "Altana małych rozmiarów"
        },
        {
            id: 10,
            desc: "Meble drewniane do ogrodu"
        },
    ];

    const createCarouselItemImage = (item) => (
        <div key={item.id}>
            <img src={`../images/${item.id}.jpg`} alt={item.desc}/>
            <p className="legend">{item.desc}</p>
        </div>
    )
    const baseChildren = <div>{imagesArr.map(createCarouselItemImage)}</div>;

    return (
        <GalleryWrapper>
            <div className="container-fluid">

                <div className="row gallery-carousel">
                    <Carousel infiniteLoop
                              showThumbs={false}
                              stopOnHover={true}
                              centerMode
                              interval={2000}
                              autoPlay={true}
                              dynamicHeight={true}
                              centerSlidePercentage={window.screen.width > 768 ? 35 : 80}
                              emulateTouch={true}
                              swipeable={true}
                              showArrows={true}>
                        {baseChildren.props.children}
                    </Carousel>
                </div>

                <div>
                    <Title text="Budy dla psów" desc="Wygodne budy dla naszych pupilów. Wszystko jest robione pod indywidualne potrzeby i rozmiary zwierząt."/>
                </div>
                <GalleryRow arr={[buda1, buda2, buda3, buda4]}/>


                <div>
                    <Title text="Place zabaw" desc="Plac zabaw idealny dla małych dzieci. Rozmiary, atrakcje i inne szczegóły do ustalenia."/>
                </div>
                <GalleryRow arr={[plac1, plac2, plac3, plac4]}/>

                <div>
                    <Title text="Altany" desc="Drewniane i solidne altany, które pomieszczą duzą grupę ludzi. Idealne pomieszczenie na letnie imprezy."/>
                </div>
                <GalleryRow arr={[altana1, altana2, altana3, altana4]}/>

                <div>
                    <Title text="Pozostałe meble ogrodowe" desc="Krzesła, ławki, hamaki, huśtawki, doniczki, łóżka, toalety zewnętrzne, zabudowy drewniane oraz parkiety."/>
                </div>
                <GalleryRow arr={[pozostale1, pozostale2, pozostale4, pozostale5]}/>
                <GalleryRow arr={[pozostale3, pozostale6, pozostale7, pozostale8]}/>

            </div>
        </GalleryWrapper>
    );
};

const GalleryWrapper = styled.div`

.zoom {
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.zoom img{
  width: 100%;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  transition: all 1s ease;
}

.zoom img:hover {
 transform: scale(1.2);
}
`;

export default GalleryPage;