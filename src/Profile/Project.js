import React from "react";
import "./Projects.css"; // optional separate CSS

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A responsive personal portfolio built with React and CSS animations.</p>
        </div>
        <div className="project-card">
          <h3>Todo App</h3>
          <p>A simple task manager using React Hooks and Local Storage.</p>
        </div>
        <div className="project-card">
          <h3>Weather App</h3>
          <p>Weather forecast application using OpenWeather API and React.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
