import React from "react";

const Contact = () => {
  const sectionStyle = {
    padding: "60px 100px",
    color: "white",
    background: "black",
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "36px",
    color: "cyan",
    marginBottom: "40px",
    textAlign: "center",
    borderBottom: "2px solid yellow",
    paddingBottom: "15px",
    width: "100%",
  };

  const cardStyle = {
    background: "#111",
    border: "1px solid #333",
    borderRadius: "16px",
    padding: "40px",
    maxWidth: "600px",
    width: "100%",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px",
    fontSize: "18px",
    color: "#ccc",
  };

  const iconStyle = {
    fontSize: "28px",
  };

  const linkStyle = {
    color: "deepskyblue",
    textDecoration: "none",
  };

  const subtitleStyle = {
    fontSize: "22px",
    color: "yellow",
    marginBottom: "25px",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Contact Me</h2>
      <div style={cardStyle}>
        <h3 style={subtitleStyle}>Let's Connect!</h3>

        <div style={itemStyle}>
          <span style={iconStyle}>📧</span>
          <span>Email: <a href="mailto:youremail@gmail.com" style={linkStyle}>priyankavin00@gmail.com</a></span>
        </div>

        <div style={itemStyle}>
          <span style={iconStyle}>📍</span>
          <span>Location: Chennai, India</span>
        </div>

        <div style={itemStyle}>
          <span style={iconStyle}>📸</span>
          <span>Instagram: <a href="https://www.instagram.com/__p_r_i_y_a_n__16/?next=%2F" style={linkStyle}>your instagram</a></span>
        </div>

        <div style={itemStyle}>
          <span style={iconStyle}>💼</span>
          <span>LinkedIn: <a href="https://www.linkedin.com/in/priyan-kamalanathan-3994a1290/" style={linkStyle}>your linkedin</a></span>
        </div>

        <div style={itemStyle}>
          <span style={iconStyle}>🐙</span>
          <span>GitHub: <a href="https://github.com/priyankamalanathan" style={linkStyle}>your github</a></span>
        </div>

      </div>
    </section>
  );
};

export default Contact;