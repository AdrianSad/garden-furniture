import React from 'react';
import styled from "styled-components";

const Gallery = () => {

    const createImage = (index, options = {}) => (
            <img src={`../images/${index}.jpg`} key={index} alt="home page gallery"/>
    )

    return (
        <GalleryWrapper>
            <div className="gallery">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(createImage)};
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