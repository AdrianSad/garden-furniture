import React from 'react';
import styled from "styled-components";

const Title = ({text}) => {
    return (
        <TitleWrapper>
            <h1 className="text-main text-title">{text}</h1>
            <hr/>
        </TitleWrapper>
    );
};

const TitleWrapper = styled.div`
margin-top: 50px;
text-align: center;

hr {
  size: 2px;
  border: 1px solid var(--primaryColor);
  margin: 2rem 5rem;
}
`;

export default Title;