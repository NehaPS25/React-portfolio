import React, { useState, useEffect } from "react";
import { newcontext } from "../Component/Context";

const Navbar = () => {
  const { homeRef, aboutRef, contactRef, scrollTo, projectRef } =
    React.useContext(newcontext);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect screen resize to switch mobile/desktop mode dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navbar container styles
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#0d1f34ff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  // Menu button (hamburger icon)
  const hamburgerStyle = {
    fontSize: "1.8rem",
    color: "#f1faee",
    cursor: "pointer",
    border: "none",
    background: "transparent",
  };

  // Nav links container (desktop & mobile)
  const linksContainer = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    position: isMobile ? "absolute" : "static",
    top: isMobile ? "60px" : "auto",
    left: 0,
    width: isMobile ? "100%" : "auto",
    backgroundColor: isMobile ? "#1d3557" : "transparent",
    padding: isMobile ? "15px 0" : "0",
    justifyContent: "center",
    alignItems: "center",
    gap: isMobile ? "20px" : "25px",
    transition: "all 0.3s ease-in-out",
  };

  // Common button styles
  const buttonStyle = {
    background: "transparent",
    border: "2px solid #f1faee",
    color: "#f1faee",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
    marginRight: isMobile ? "0" : "30px",
  };

  const handleHover = (e, isOver) => {
    e.currentTarget.style.backgroundColor = isOver ? "#a8dadc" : "transparent";
    e.currentTarget.style.color = isOver ? "#1d3557" : "#f1faee";
    e.currentTarget.style.borderColor = isOver ? "#a8dadc" : "#f1faee";
    e.currentTarget.style.transform = isOver ? "scale(1.05)" : "scale(1)";
  };

  const handleClick = (ref) => {
    scrollTo(ref);
    if (isMobile) setMenuOpen(false); // auto-close menu after clicking on mobile
  };

  return (
    <nav style={navStyle}>
      {/* Logo or Title */}
      <div
        style={{
          color: "#f1faee",
          fontSize: "1.5rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => scrollTo(homeRef)}
      >
         Neha Shinde
      </div>

      {/* Hamburger Menu (visible only on mobile) */}
      {isMobile && (
        <button style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      )}

      {/* Navigation Buttons */}
      <div style={linksContainer}>
        {[
          { name: "Home", ref: homeRef },
          { name: "About", ref: aboutRef },
          { name: "Projects", ref: projectRef },
          { name: "Contact", ref: contactRef },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item.ref)}
            style={buttonStyle}
            onMouseOver={(e) => handleHover(e, true)}
            onMouseOut={(e) => handleHover(e, false)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
