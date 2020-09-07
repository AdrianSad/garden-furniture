import React from 'react';
import Title from "./Title";

const ContactForm = () => {
    return (
        <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">

                <Title text="Skontaktuj się z nami"/>

                <form className="mt-5" action="https://formspree.io/mrgyozey" method="POST">

                    <div className="form-group">
                        <input type="text" className="form-control" name="firstName" placeholder="Jan Kowalski"/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="email@example.com"/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" placeholder="Temat wiadomości"/>
                    </div>

                    <div className="form-group">
                        <textarea rows="10" className="form-control" name="message" placeholder="Twoja wiadomość"/>
                    </div>

                    <div className="form-group mt-3">
                        <input type="submit" value="Wyślij" className="form-control bg-primary text-white"/>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactForm;