import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const RightNav = ({fixed, open, closeBar}) => {

    return (
        <ItemsWrapper fixed={fixed} open={open}>
            <li>
                <Link className="link" to="/" onClick={closeBar}>Strona Główna</Link>
            </li>
            <li>
                <Link className="link" to="/contact" onClick={closeBar}>Kontakt</Link>
            </li>
            <li>
                <Link className="link" to="/gallery" onClick={closeBar}>Galeria</Link>
            </li>
        </ItemsWrapper>
    );
};

const ItemsWrapper = styled.nav`
list-style: none;
display: flex;
flex-flow: row nowrap;

position:relative;
animation: animateright 0.4s;

@keyframes animateright{
  from{right:-300px;opacity:0} to{right:0;opacity:1}
}

//li{
//  width: 100%;
//  padding: 1.75rem 1rem;
//}

.link{
  display: block;
  padding: 1.75rem 1rem;
  color: ${props => props.fixed ? "var(--primaryColor)" : "var(--mainWhite)"};
  font-weight: bold;
  text-shadow: ${props => props.fixed ? "none" : "1px 1px var(--mainBlack)"};
  text-decoration: none;
}

@media (max-width: 768px) {
    display: ${({open}) => open ? "flex" : "none"};
    flex-flow: column nowrap;
    background-color: var(--primaryDark);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 15rem;
    padding-top: 3.5rem;
    //transition: var(--mainTransition);
    //transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};

  .link {
    color: var(--mainWhite);
  }
  
  .link:hover{
    background: var(--mainWhite);
    color: var(--primaryColor);
    transition: var(--mainTransition);
  }
}
`;

export default RightNav;