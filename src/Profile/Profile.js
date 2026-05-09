import React, { useState } from "react";
import "./Profile.css";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import image1 from "./gt3.jpg";
import image2 from "./instagram.png";
import image3 from "./linkedin.png";
import image4 from "./git.png";
import resume from "./RESUME MINE.pdf";

const Home = () => {
  return (
    <div className="content">
      <div className="text-section">
        <h1>HELLO, I'M <span>PRIYAN</span></h1>
        <h2>Front End Developer</h2>
        <p> 
          As an enthusiastic front-end developer with a foundation
          in web development technologies like HTML, CSS, and JavaScript, I
          have experience in frameworks like React and Angular, and I'm
          familiar with Git and responsive design principles.
        </p>
        <div className="social-resume">
          <div className="social-icons">
            <a href="https://www.instagram.com/__p_r_i_y_a_n__16/?next=%2F">
              <img src={image2} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/priyan-kamalanathan-3994a1290/">
              <img src={image3} alt="LinkedIn" />
            </a>
            <a href="https://github.com/priyankamalanathan">
              <img src={image4} alt="GitHub" />
            </a>
          </div>
          <a href={resume} download className="resume-btn">Resume ↓</a>
        </div>
      </div>
      <div className="image-section">
        <img src={image1} alt="profile" />
      </div>
    </div>
  );
};

const AppContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = !["about", "projects", "contact"].some(p =>
    location.pathname.includes(p)
  );

  return (
    <div className="profile-container" style={{padding:"30px"}}>
      <nav className="navbar">
        <div className="logo">
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="60" rx="8" fill="black" />
            <text x="40%" y="95%" fontSize="48" fontWeight="900"
              textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif">K</text>
          </svg>
          Priyan.
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {!isHome && (
            <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          )}
          <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
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

      {isHome ? (
        <Home />
      ) : (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
};

const Profile = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default Profile;