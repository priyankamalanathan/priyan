import React from "react";

const About = () => {
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
  };

  const cardTitleStyle = {
    fontSize: "22px",
    color: "yellow",
    marginBottom: "15px",
  };

  const cardParaStyle = {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#ccc",
  };

  const skillTagsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  };

  const skillTagStyle = {
    background: "deepskyblue",
    color: "black",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "bold",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>About Me</h2>
      <div style={gridStyle}>

        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>👨‍💻 I Am Priyan</h3>
          <p style={cardParaStyle}>
            A Frontend Developer with a strong foundation in building responsive, user-friendly
             websites and web applications. Proficient in HTML, CSS, JavaScript, and
             frameworks like React . Passionate about creating clean, efficient code and
             delivering high- quality user experiences. Skilled in optimizing performance and
             collaborating with design and backend teams to bring seamless web solutions to
             life.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>🎓 Education</h3>
          <p style={cardParaStyle}>
            <strong style={{ color: "white" }}>B-Tech</strong><br />
             Sri Krishna College of Engineering and Technology<br />
            2023  -  2027<br /><br />
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>🛠️ Skills</h3>
          <div style={skillTagsStyle}>
            <span style={skillTagStyle}>HTML</span>
            <span style={skillTagStyle}>CSS</span>
            <span style={skillTagStyle}>JavaScript</span>
            <span style={skillTagStyle}>Figma</span>
            <span style={skillTagStyle}>Java</span>
            <span style={skillTagStyle}>Spring Boot</span>
            <span style={skillTagStyle}>C++</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;