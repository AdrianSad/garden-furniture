import React from 'react';
import styled from "styled-components";
import image1 from "../../images/1.jpg"
import image2 from "../../images/2.jpg"
import image3 from "../../images/3.jpg"
import image4 from "../../images/4.jpg"
import image5 from "../../images/5.jpg"
import image6 from "../../images/6.jpg"
import image7 from "../../images/7.jpg"
import image8 from "../../images/8.jpg"
import image9 from "../../images/9.jpg"
import image10 from "../../images/10.jpg"

const Gallery = () => {
    return (
        <GalleryWrapper>
            <div className="gallery">
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
                <img src={image4} alt=""/>
                <img src={image5} alt=""/>
                <img src={image6} alt=""/>
                <img src={image7} alt=""/>
                <img src={image8} alt=""/>
                <img src={image9} alt=""/>
                <img src={image10} alt=""/>
            </div>
        </GalleryWrapper>
    );
};

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
.gallery{
  position:relative;
  flex-grow: 1;
  margin: auto;
  max-width: 1200px;
  max-height: 1200px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2vmin;
  justify-items: center;
  align-items: center;
}

img{
  z-index: 1;
  grid-column: span 2;
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%,
   100% 50%,
   50% 100%,
    0% 50%);
  transform: scale(1);
  transition: all .25s;
  
  &:nth-child(7n+1){
    grid-column: 2 / span 2;
  }
  
  &:hover {
    z-index: 2;
    transform: scale(2);
  }
    
  @media (max-width: 768px){
    &:hover {
      z-index: 2;
      transform: scale(3);
    }
  }
}
`;

export default Gallery;