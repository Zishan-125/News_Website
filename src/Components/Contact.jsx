import React from 'react';

import { TbMailForward } from "react-icons/tb";

function Contact() {
  return (
    <div id='contact'>
      <form action="https://formspree.io/f/xblykebo" method='POST' className="contact-form">
        <h2 id='contacttitle'>Contact SNAP News</h2>

        <div className="form-group">
          <label htmlFor='username'>Name</label>
          <input name='username' type='text' id='username' required />
        </div>

        <div className="form-group">
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' id='email' required />
        </div>

        <div className="form-group">
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' rows="5" required></textarea>
        </div>

        <button id='contactbtn' type='submit'>
          Send Message <TbMailForward />
        </button>
      </form>
    </div>
  );
}

export default Contact;
