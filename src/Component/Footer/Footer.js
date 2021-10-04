import React from 'react';
import './Footer.css'


const Footer = () => {

    return (
        <div className='bg-dark text-white p-5 footer'>
            {/* link use for footer */}
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">E-mail</a>
            <a href="https://www.linkedin.com/feed/?trk=onboarding-landing">Linkedin</a>
            <h1>International English Language Testing System</h1>
        </div>
    );
};

export default Footer;