import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const RightNav = ({open}) => {
    return (
        <ItemsWrapper open={open}>
            <li>
                <Link className="link" to="/">Strona Główna</Link>
            </li>
            <li>
                <Link className="link" to="/contact">Kontakt</Link>
            </li>
            <li>
                <Link className="link" to="/gallery">Galeria</Link>
            </li>
        </ItemsWrapper>
    );
};

const ItemsWrapper = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;

li{
  padding: 2rem 1rem;
}

.link{
  text-decoration: none;
  color: var(--mainBlack);
}

@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--primaryDark);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 15rem;
    padding-top: 3.5rem;
    transition: var(--mainTransition);
    transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
  

  .link {
    color: var(--mainWhite);
  }
}
`;

export default RightNav;