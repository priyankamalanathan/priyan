import React from "react";

const Project = () => {
  const sectionStyle = {
    padding: "60px 100px",
    color: "white",
    background: "black",
    minHeight: "calc(100vh - 120px)",
  };

  const titleStyle = {
    fontSize: "36px",
    color: "cyan",
    marginBottom: "40px",
    textAlign: "center",
    borderBottom: "2px solid yellow",
    paddingBottom: "15px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  };

  const cardStyle = {
    background: "#111",
    border: "1px solid #333",
    borderRadius: "16px",
    padding: "30px",
    transition: "transform 0.3s, border-color 0.3s",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "40px",
    marginBottom: "15px",
  };

  const cardTitleStyle = {
    fontSize: "20px",
    color: "yellow",
    marginBottom: "12px",
  };

  const cardParaStyle = {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#ccc",
    marginBottom: "20px",
  };

  const tagsStyle = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  };

  const tagStyle = {
    background: "deepskyblue",
    color: "black",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "bold",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.borderColor = "cyan";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "#333";
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>My Projects</h2>
      <div style={gridStyle}>

        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={iconStyle}>🏠</div>
          <h3 style={cardTitleStyle}>Online Rental System</h3>
          <p style={cardParaStyle}>
            A fully functional online rental platform built using JavaScript,
            allowing users to browse, list, and manage rental properties with
            an intuitive interface.
          </p>
          <div style={tagsStyle}>
            <span style={tagStyle}>JavaScript</span>
          </div>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={iconStyle}>⚖️</div>
          <h3 style={cardTitleStyle}>Pound to Gram Converter</h3>
          <p style={cardParaStyle}>
            A dynamic and responsive unit converter that converts pounds to
            grams in real time, built with a clean UI using HTML, CSS and
            JavaScript.
          </p>
          <div style={tagsStyle}>
            <span style={tagStyle}>HTML</span>
            <span style={tagStyle}>CSS</span>
            <span style={tagStyle}>JavaScript</span>
          </div>
        </div>

        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={iconStyle}>🎓</div>
          <h3 style={cardTitleStyle}>Alumni Management System</h3>
          <p style={cardParaStyle}>
            A full stack alumni management platform that enables institutions
            to track, connect and manage alumni data with complete frontend
            and backend integration.
          </p>
          <div style={tagsStyle}>
            <span style={tagStyle}>Full Stack</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;