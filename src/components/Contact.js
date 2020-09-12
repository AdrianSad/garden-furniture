import React from 'react';
import styled from "styled-components";
import {FaMapMarkerAlt, FaPhone, FaFacebook, FaUser} from "react-icons/all";

const Contact = () => {
    return (
        <>
            <ContactWrapper>
                <div className="contact-container">
                    <h1 className="text-title text-main text-center">
                        Kontakt
                        <hr/>
                    </h1>

                    <div className="line">
                        <div className="field">
                            <FaMapMarkerAlt className="icon"/>
                            <p>Miasto kod pocztowy ul. test 123</p>
                        </div>
                    </div>

                    <div className="line">
                        <div className="field">
                            <FaPhone className="icon"/>
                            <p>123456789</p>
                        </div>
                    </div>

                    <div className="line">
                        <div className="field">
                            <FaFacebook className="icon"/>
                            <p>facebook.pl/test</p>
                        </div>
                    </div>

                    <div className="line">
                        <div className="field">
                            <FaUser className="icon"/>
                            <p>imię nazwisko</p>
                        </div>
                    </div>
                </div>
            </ContactWrapper>
    </>
    );
};




const ContactWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin: 10vh 10vw;
width: 30vw;

.text-center{
  text-align: center;
}

@media (max-width: 768px){
  width: 80vw;
}

.contact-container{
  background: var(--mainGrey);
  padding: 3rem;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)
;
}

hr {
  size: 2px;
  border: 1px solid var(--primaryColor);
  margin: 1rem 1rem;
}

.line{
  margin-top: 2rem;
  text-align: center;
}

.field{
display: inline-flex;
}

.icon {
  font-size: 2rem;
  margin-right: 0.5rem;
  color: var(--primaryColor);
}

p{
  font-size: 1.5rem;
}
`;

export default Contact;