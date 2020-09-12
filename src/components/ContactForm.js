import React from 'react';
import Title from "./Title";
import styled from "styled-components";

const ContactForm = () => {
    return (
        <ContactFormWrapper>
            <div>
                <Title text="Skontaktuj się z nami"/>

                <form action="https://formspree.io/mrgyozey" method="POST">

                    <div className="form-group">
                        <input type="text" name="firstName" placeholder="Jan Kowalski"/>
                    </div>

                    <div className="form-group">
                        <input type="email" name="email" placeholder="email@example.com"/>
                    </div>

                    <div className="form-group">
                        <input type="text" name="subject" placeholder="Temat wiadomości"/>
                    </div>

                    <div className="form-group">
                        <textarea rows="10" name="message" placeholder="Twoja wiadomość"/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Wyślij"/>
                    </div>
                </form>
            </div>
        </ContactFormWrapper>
    );
};

const ContactFormWrapper = styled.div`
  display: flex;
  padding: 0 10vw;
  margin: 5vh auto 5vh auto;
  justify-content: center;

form{
  margin-top: 3vh;
}

.form-group {
  margin-top: 1rem;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

input[type=submit] {
  background-color: var(--primaryColor);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: bottom;
}

input[type=submit]:hover {
  background-color: var(--primaryDark);
}
`;

export default ContactForm;