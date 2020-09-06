import React from 'react';
import styled from "styled-components";

const PageImage = ({img, max}) => {
    return (
        <ImageWrapper img={img} max={max}/>
    );
};

const ImageWrapper = styled.div`
  min-height: ${props => props.max ? "100vh" : "50vh"};
  width: 100vw;
  background: url(${props => (props.img)}) center/cover no-repeat;
  //background-attachment: fixed;
  //background-position: center top;
`;

export default PageImage;