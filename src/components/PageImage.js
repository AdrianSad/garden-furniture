import React from 'react';
import styled from "styled-components";

const PageImage = ({img}) => {
    return (
        <ImageWrapper img={img}/>
    );
};

const ImageWrapper = styled.div`
  min-height: 100vh;
  background: url(${props => (props.img)}) center/cover no-repeat;
  //background-attachment: fixed;
  //background-position: center top;
`;

export default PageImage;