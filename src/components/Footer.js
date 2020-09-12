import React from 'react';
import styled from "styled-components";
import {FaFacebook} from "react-icons/fa";

const Footer = () => {
    return ( <FooterWrapper>
                    <div>
                        <p>
                            copyright &copy; Meble Ogrodowe {new Date().getFullYear()}. all rights reserved
                        </p>
                    </div>

                    <div>
                        <a href="https://www.facebook.com">
                            <FaFacebook className="icon"/>
                        </a>
                    </div>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  padding: 1rem;
  justify-content: space-around;

.icon{
  font-size: 1.5rem;
  color: var(--mainWhite);
  transition: var(--mainTransitionin);
}
.icon:hover{
  color: var(--primaryColor);
  cursor: pointer;
}

p {
  text-transform: capitalize;
}
`;

export default Footer;
