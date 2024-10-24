import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          showOkMessage();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const showOkMessage = () => {
    const form = document.getElementById("contact-form");
    const ok = document.getElementById("contact-ok");
    form.style.display = "none";
    ok.style.display = "block";  
  }

  return (
    <>
    <form id="contact-form" className="contact-form" ref={form} onSubmit={sendEmail}>
        <p>Just fill out the form below and I will get back to you as soon as possible.</p>
        <div className="mb-3">
            <label htmlFor="first-name" className="form-label">First name</label>
            <input type="text" className="form-control" id="first_name" name="first_name" />
        </div>
        <div className="mb-3">
            <label htmlFor="last-name" className="form-label">Last name</label>
            <input type="text" className="form-control" id="last_name" name="last_name" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="to_email" name="to_email" />
        </div>
        <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" name="subject" />
        </div>
        <div className="mb-3">
            <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" rows="4" />
                
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <div id="contact-ok" className="contact-ok mb-3">
      <p>Thank you for contacting me.<br />
        I will get back to you as soon as possible.</p>
    </div>
    </>
  );
}

export default ContactUs