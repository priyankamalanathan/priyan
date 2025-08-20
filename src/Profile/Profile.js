import React, { useState } from "react";
import "./Profile.css";
import image1 from "./gt3.jpg";
import image2 from "./instagram.png";
import image3 from "./linkedin.png";
import image4 from "./git.png";
import resume from "./Resume.pdf"

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
  <rect width="50" height="60" rx="8" fill="black"/>
  <text x="40%" y="95%" font-size="48" font-weight="900" 
        text-anchor="middle" fill="white" font-family="Arial Black, sans-serif">K</text>
</svg>
Priyan.</div>

        {/* Nav Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>

        {/* Hamburger */}
        <div 
          className={`hamburger ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <hr className="divider" />

      {/* Main Content */}
      <div className="content">
        {/* Text Section */}
        <div className="text-section">
          <h1>
            HELLO, I'M <span>PRIYAN</span>
          </h1>
          <h2>Front End Developer</h2>
          <p>
            As an enthusiastic sophomore front-end developer with a foundation
            in web development technologies like HTML, CSS, and JavaScript, I
            have experience in frameworks like React and Angular, and I'm
            familiar with Git and responsive design principles.
          </p>

          <div className="social-resume">
            <div className="social-icons">
              <a href="https://www.instagram.com/__p_r_i_y_a_n__16/?next=%2F"><img src={image2} alt="Instagram" /></a>
              <a href="https://www.linkedin.com/in/priyan-kamalanathan-3994a1290/"><img src={image3} alt="LinkedIn" /></a>
              <a href="https://github.com/priyankamalanathan"><img src={image4} style={{color:"white"}} alt="Twitter" /></a>
            </div>
            <a href={resume} download={resume} className="resume-btn">Resume ↓</a>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src={image1} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
