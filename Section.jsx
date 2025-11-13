import React, { useContext } from "react";
import { newcontext } from "../Component/Context";
import image from "../assets/images.png";
import imagee from "../assets/download.jpg";
import img from "../assets/images1.png";
import re1 from "../assets/re.jpg";
import re2 from "../assets/images.jpg";
const Sections = () => {
  const { homeRef, aboutRef, contactRef, projectRef, scrollTo } =
    useContext(newcontext);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* 🏠 HOME SECTION */}
      <div
        ref={homeRef}
        style={{
          height: "100vh",
      background: "#1d3557", 
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 10%",
          color: "#fff",
          boxSizing: "border-box",
        }}
      >
        {/* Text Section */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            Hi, I am a Software Developer
          </h2>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Java Full Stack Developer
          </h1>
          <button
            style={{
              background: "#4f5a6aff",
              border:"2px solid #fff",
              color: "#fff",
              padding: "10px 20px",
              
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#457b9d")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#1d3557")}
            onClick={() => scrollTo(projectRef)}
          >
            View My Work
          </button>
        </div>

        {/* Image Section */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src={image}
            alt="Profile"
            style={{
              width: "60%",
              borderRadius: "50%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </div>

      {/* 👩‍💻 ABOUT SECTION */}
      <div
        ref={aboutRef}
        style={{
          height: "100vh",
          width: "100vw",
          background: "#a8dadc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 15%",
          textAlign: "center",
          color: "#1d3557",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>About Me</h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "800px" }}>
          I'm a passionate <strong>Java Full Stack Developer</strong> with a
          strong interest in building scalable and efficient web applications.
          I enjoy solving complex problems and creating clean, user-friendly
          interfaces. My skills include{" "}
          <strong>Java, Spring Boot, React.js, MySQL</strong>, and RESTful APIs.
          I love continuously learning new technologies and improving my craft
          every day.
        </p>

        <p style={{ fontSize: "1.1rem", marginTop: "20px", color: "#333" }}>
          When I’m not coding, I enjoy exploring new tech trends, reading about
          system design, and contributing to small open-source projects.
        </p>
      </div>

      {/* 💼 PROJECT SECTION */}
      <div
        ref={projectRef}
        style={{
          minHeight: "100vh",
          background: "#457b9d",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 10%",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "40px" }}>My Projects</h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            width: "100%",
          }}
        >
          {[
            {
              name: "Hospital Management System",
              img:imagee,
              link: "https://github.com/yourusername/project1",
            },
            {
              name: "Expense Tracker App",
              img: img,
              link: "https://github.com/yourusername/project2",
            },
            {
              name: "Recipe Book Website",
              img: re1,
              link: "https://github.com/NehaPS25/RecipeBook1",
            },{
              name: "Malware Detection System",
              img:re2,
              link: "https://github.com/NehaPS25/malware_detection",
            },
            {
              name: "Expense Tracker App",
              img: img,
              link: "https://github.com/yourusername/project2",
            },
          ].map((proj) => (
            <div
              key={proj.name}
              onClick={() => window.open(proj.link, "_blank")}
              style={{
                background: "#1d3557",
                borderRadius: "12px",
                width: "300px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={proj.img}
                alt={proj.name}
                style={{
                  width: "100%",
                  height: "180px",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ padding: "15px 0" }}>{proj.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* 📞 CONTACT SECTION */}
      <div
        ref={contactRef}
        style={{
          minHeight: "100vh",
          background: "#0b132b",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 20px",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Contact Me</h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "40px",
            maxWidth: "600px",
          }}
        >
          I’d love to connect! Whether you want to discuss a project,
          collaborate, or just say hi — feel free to reach out.
        </p>

        <div style={{ marginBottom: "40px", fontSize: "1.1rem" }}>
          <p>
            📧 Email:{" "}
            <a
              href="mailto:yourname@gmail.com"
              style={{ color: "#f1faee", textDecoration: "none" }}
            >
              nehashinde8525@gmail.com
            </a>
          </p>
          <p>📞 Phone: +91 8652120119</p>
          <p>
            💼 GitHub:{" "}
            <a
              href="https://github.com/NehaPS25"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1faee", textDecoration: "none" }}
            >
               https://github.com/NehaPS25            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="www.linkedin.com/in/neha-shinde-41391a2b7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f1faee", textDecoration: "none" }}
            >
              linkedin.com/in/yourusername
            </a>
          </p>
        </div>

        <form
          style={{
            background: "#457b9d",
            padding: "30px",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
              resize: "none",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              background: "#f1faee",
              color: "#1d3557",
              border: "none",
              borderRadius: "8px",
              padding: "12px",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#a8dadc")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "#f1faee")
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sections;
