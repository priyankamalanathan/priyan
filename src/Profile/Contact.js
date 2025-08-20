import React from "react";
import "./Contact.css"; // optional separate CSS

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <p>Let’s connect! Feel free to reach out via email or social platforms.</p>
      <div className="contact-info">
        <p>📧 Email: <a href="mailto:priyankamalanathan16@gmail.com">priyankamalanathan16@gmail.com</a></p>
        <p>📍 Location: India</p>
      </div>
    </section>
  );
};

export default Contact;
