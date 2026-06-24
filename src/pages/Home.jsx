import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profilePic from "../assets/images/profile_picture1.png";

function Home() {
  return (
    <div className="page-content">
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I’m <span className="highlight">Syumaira Azhar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A passionate <strong>Web Developer</strong> focused on building
            clean, functional, and user-friendly digital solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hero-actions"
          >
            <Link to="/project" className="btn">
              Explore My Work <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="hero-image-wrapper">
            <img
              src={profilePic}
              alt="Syumaira Azhar Profile"
              draggable="false"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            I am a graduate with hands-on experience in web development, system design,
            and networking projects. I enjoy turning complex problems into simple,
            elegant solutions and continuously improving my technical skills.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "40px", flexWrap: "wrap" }}>
            <div className="skill-chip" style={{ padding: "16px 24px", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "24px", fontWeight: "800", color: "var(--color-primary)" }}>UTeM</span>
              <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Computer Networking Grad</span>
            </div>
            <div className="skill-chip" style={{ padding: "16px 24px", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "24px", fontWeight: "800", color: "var(--color-primary)" }}>7+</span>
              <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Hands-on Projects</span>
            </div>
            <div className="skill-chip" style={{ padding: "16px 24px", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "24px", fontWeight: "800", color: "var(--color-primary)" }}>3.90</span>
              <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Diploma CGPA (PUO)</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;