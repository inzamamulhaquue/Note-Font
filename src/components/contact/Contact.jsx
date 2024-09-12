import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact Us</h1>
      <p>
      <FontAwesomeIcon icon={faPhone} /> Phone: +91-763-185-6488
      </p>
      <p>
      <FontAwesomeIcon icon={faEnvelope} /> Email: inz01haq@gmail.com
      </p>
      <p>Feel free to reach out to us via email or phone. <br />ThankYou</p>
      
    </div>
  )
}

export default Contact
