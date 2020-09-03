import React from 'react';
import Button from "./Button";
import styled from "styled-components";

const Navbar = () => {
    return (
        <NavbarWrapper>
            <div className="logo">
                <h1 className="text-title text-main">Meble ogrodowe</h1>
            </div>
            <Button/>
        </NavbarWrapper>
    );
};

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 5rem;
  border-bottom: 2px solid var(--primaryColor);
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;

  .logo{
    padding: 1.5rem 0;
  }
`;

export default Navbar;