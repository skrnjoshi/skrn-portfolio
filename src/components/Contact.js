// components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    
    // Construct the mailto URL
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const mailtoUrl = `mailto:skrnjoshi02@gmail.com?subject=${subject}&body=${body}`;
    
    // Redirect to email client
    window.location.href = mailtoUrl;
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form id="contactForm" className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="contact__input"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="contact__input"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            id="message"
            cols="0"
            rows="10"
            placeholder="Message"
            className="contact__input"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <input type="submit" value="Send" className="contact__button button" />
        </form>
      </div>
    </section>
  );
};

export default Contact;