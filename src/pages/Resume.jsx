import { motion } from "framer-motion";
import resumePdf from "../assets/resume/Resume_SyumairaAzhar.pdf";

const skills = [
  "HTML", "CSS", "JavaScript", "PHP", "MySQL", "SQLite", 
  "Docker", "Linux", "Proxmox", "Git", "Python", 
  "DNS", "DHCP", "VLAN", "Active Directory"
];

function Resume() {
  return (
    <div className="page-content">
      <div className="resume-page-inner">
        
        {/* Page Header */}
        <div className="section-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Resume
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A quick overview of my education, technical skills, work experience, and selected projects.
          </motion.p>
          
          <motion.div 
            className="resume-download"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a 
              href={resumePdf} 
              className="btn" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Resume_SyumairaAzhar.pdf"
            >
              <i className="fa-solid fa-file-arrow-down"></i> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Summary Card */}
        <motion.div 
          className="resume-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2><i className="fa-solid fa-user-tie"></i> Professional Summary</h2>
          <p>
            Computer Science (Computer Networking) graduate with experience in web development, backend systems,
            Linux, networking, and automation projects. Skilled in PHP, JavaScript, Python, MySQL, Docker, and
            system administration. Passionate about building reliable software solutions while leveraging
            infrastructure and networking knowledge.
          </p>
        </motion.div>

        {/* Education & Experience Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "30px" }}>
          
          {/* Education Timeline */}
          <motion.div 
            className="resume-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2><i className="fa-solid fa-graduation-cap"></i> Education</h2>
            <div className="resume-timeline">
              
              <div className="resume-item">
                <h3>Bachelor of Computer Science (Computer Networking)</h3>
                <div className="resume-meta">
                  <span>Universiti Teknikal Malaysia Melaka (UTeM)</span>
                  <span>| CGPA: 3.49</span>
                </div>
              </div>

              <div className="resume-item">
                <h3>Diploma in Information Technology (Digital Technology)</h3>
                <div className="resume-meta">
                  <span>Politeknik Ungku Omar</span>
                  <span>| CGPA: 3.90</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div 
            className="resume-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2><i className="fa-solid fa-briefcase"></i> Work Experience</h2>
            <div className="resume-timeline">

              <div className="resume-item">
                <h3>IT Support Technician / Internship</h3>
                <div className="resume-meta">
                  <span>PKNS Headquarters</span>
                </div>
                <ul>
                  <li>Maintained and monitored HQ network infrastructure.</li>
                  <li>Implemented VLAN segmentation for new departments.</li>
                  <li>Assisted with troubleshooting and website maintenance.</li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>IT Internship</h3>
                <div className="resume-meta">
                  <span>AIM Connections</span>
                </div>
                <ul>
                  <li>Supported Passenger Information System infrastructure.</li>
                  <li>Installed and configured networking equipment.</li>
                  <li>Performed on-site troubleshooting and maintenance.</li>
                </ul>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Technical Skills */}
        <motion.div 
          className="resume-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2><i className="fa-solid fa-laptop-code"></i> Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <span key={idx} className="skill-chip">
                <i className="fa-solid fa-circle-check" style={{ color: "var(--color-primary)", fontSize: "12px" }}></i>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="resume-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2><i className="fa-solid fa-star"></i> Featured Projects</h2>
          <div className="featured-projects-grid">

            <div className="featured-project-card">
              <h3>Job Application Tracking System</h3>
              <span className="project-type">Personal Project</span>
              <p>
                Developed a self-hosted web application using PHP, SQLite, Docker, and Proxmox to manage job applications, interview schedules, and application progress.
              </p>
            </div>

            <div className="featured-project-card">
              <h3>Smart Automated Gate System</h3>
              <span className="project-type">Final Year Project - Bachelor's</span>
              <p>
                Built an automated vehicle access management system using Raspberry Pi, Python, OpenCV, PHP, and MySQL.
              </p>
            </div>

            <div className="featured-project-card">
              <h3>Enterprise Network Simulation</h3>
              <span className="project-type">Academic Project</span>
              <p>
                Designed and implemented an enterprise network environment incorporating Active Directory, DNS, DHCP, VLANs, and routing.
              </p>
            </div>

            <div className="featured-project-card">
              <h3>Portable Secure Media Server</h3>
              <span className="project-type">Final Year Project - Diploma</span>
              <p>
                Developed a Raspberry Pi-based portable media server with secure file sharing and wireless network access.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Resume;
