import React from 'react';
import Button from "./Button";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <NavbarWrapper>
            <div className="logo">
                <Link to="/" className="text-title text-main text-logo">Meble ogrodowe</Link>
            </div>
            <Button/>
        </NavbarWrapper>
    );
};

const NavbarWrapper = styled.nav`
  backdrop-filter: blur(6px);
  position: absolute;
  top:0;
  left:0;
  z-index: 900;
  width: 100%;
  height: 5rem;
  border-bottom: 2px solid var(--primaryColor);
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;

  .logo{
    text-shadow: 1px 1px var(--mainBlack);
    padding: 1.5rem 0;
    font-size: 1.5rem;
  }
  
  .text-logo{
    text-decoration: none;
    color: var(--primaryColor);
    &:hover{
        text-decoration: none;
    }
  }
  
  
  @media (max-width: 768px){
    .logo{
    padding: 2rem 0;
    font-size: 1rem;
  }
  }
`;

export default Navbar;