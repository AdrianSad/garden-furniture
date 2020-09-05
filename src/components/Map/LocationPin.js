import React from 'react';
import {FaMapMarkerAlt} from "react-icons/all";
import styled from "styled-components";

const LocationPin = ({text}) => {
    return (
        <PinWrapper>
            <FaMapMarkerAlt className="pin-icon"/>
            <p className="pin-text">{text}</p>
        </PinWrapper>
    );
};

const PinWrapper = styled.div`

display: flex;
align-items: center;
width: 180px;
color: var(--primaryColor);


.pin-icon {
  font-size: 4rem;
}

.pin-text {
  font-size: 1.3em;
}
`;

export default LocationPin;