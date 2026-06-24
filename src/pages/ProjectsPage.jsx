import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "../components/ProjectModal";
import Lightbox from "../components/Lightbox";

const projectsData = [
  {
    id: 1,
    category: "personal",
    title: "Job Application Tracker System",
    tech: "PHP, SQLite, Docker",
    overview: "A web-based job application tracking system designed to help job seekers organise and monitor their job search process efficiently. The system centralises all job applications in a single dashboard, allowing users to track application statuses, interview schedules, response history, and important notes. This project was developed to eliminate the need for manual spreadsheets and provide a more structured approach to managing job opportunities.",
    tools: "PHP, HTML, CSS, JavaScript, SQLite, Docker",
    highlights: "Application management dashboard, Status tracking and updates, Search and filtering functions, Data visualisation with charts, Responsive web interface, Docker container deployment",
    role: "Designed and developed the complete system, including database design, backend development, frontend user interface, CRUD functionality, status management, reporting dashboard, and Docker deployment.",
    flow: "Add job opportunity, Store application details in database, Update application status, Track interview progress, Generate dashboard statistics, Monitor overall job search performance",
    link: "",
    images: ["/images/job-tracker-dashb.png", "/images/job-tracker-archi.png"]
  },
  {
    id: 2,
    category: "utem",
    title: "Automated Gate System (FYP)",
    tech: "Raspberry Pi, Python, PHP",
    overview: "This project focuses on developing an automated vehicle access control system using real-time license plate recognition to improve security and reduce manual gate operations.",
    tools: "Raspberry Pi 4B, Python, OpenCV, PHP, MySQL",
    highlights: "Real-time license plate recognition, Automated gate control, Centralized vehicle database",
    role: "Designed and developed the full system including plate recognition, backend integration, and database management.",
    flow: "Capture vehicle image, Detect license plate, Verify plate in database, Authorize access, Open gate automatically",
    link: "",
    images: ["/images/automated_gate.jpeg"]
  },
  {
    id: 3,
    category: "utem",
    title: "Enterprise Network Setup",
    tech: "Cisco, VLAN, AD",
    overview: "Designed and implemented a simulated enterprise network infrastructure to provide secure, reliable, and scalable connectivity for multiple departments. The project focused on network segmentation using VLANs, centralised user authentication through Active Directory, automated IP address allocation with DHCP, and domain name resolution using DNS services. The environment was designed to reflect real-world organisational network requirements and best practices.",
    tools: "Cisco Routers, Cisco Switches, Active Directory, DNS, DHCP, VLAN, Windows Server",
    highlights: "VLAN-based network segmentation, Centralised user authentication with Active Directory, Automated IP address assignment using DHCP, DNS name resolution services, Improved network security and traffic management, Enterprise-style network architecture",
    role: "Responsible for designing the network topology, configuring routers and switches, creating VLANs, deploying Windows Server services, implementing Active Directory, configuring DNS and DHCP services, testing connectivity, and troubleshooting network issues.",
    flow: "Design network topology, Create VLANs for department segmentation, Configure routers and switches, Deploy Active Directory services, Configure DHCP scopes and DNS records, Join client devices to the domain, Test connectivity and security policies",
    link: "",
    images: ["/images/netw_environment.jpeg"]
  },
  {
    id: 4,
    category: "utem",
    title: "Bus Ticketing System",
    tech: "C++, MySQL",
    overview: "Developed a desktop-based bus ticketing management system to streamline the process of booking tickets, managing passenger records, and maintaining route information. The system was designed to improve efficiency by automating manual booking processes and providing organised access to travel and passenger data through a centralised database.",
    tools: "C++, MySQL, XAMPP",
    highlights: "Passenger registration and management, Ticket booking and cancellation, Route and schedule management, MySQL database integration, Automated fare calculation, Data storage and retrieval functionality",
    role: "Designed and developed the complete application, including database design, user interface implementation, booking workflows, database connectivity, and system testing. Responsible for implementing core functionalities such as passenger management, ticket reservations, and route administration.",
    flow: "Register passenger information, Select route and travel schedule, Book ticket and generate reservation record, Store booking details in MySQL database, Retrieve passenger and ticket information, Manage route and booking records",
    link: "",
    images: ["/images/bus_ticketing.png"]
  },
  {
    id: 5,
    category: "utem",
    title: "Public Complaint Management System",
    tech: "HTML, CSS, JavaScript",
    overview: "Developed a web-based complaint management platform that enables users to submit, monitor, and manage public complaints through a centralised system. The application was designed to improve communication between the public and administrators by providing a structured workflow for complaint submission, status tracking, and resolution management.",
    tools: "HTML, CSS, JavaScript, MySQL",
    highlights: "Online complaint submission, Complaint status tracking, Centralised complaint database, Administrative complaint management, Search and filtering functionality, Improved complaint resolution workflow",
    role: "Designed and developed the web application, including the user interface, database structure, complaint submission process, status management features, and data storage functionality. Responsible for implementing both user and administrator workflows to ensure efficient complaint handling.",
    flow: "Submit complaint details, Store complaint information in database, Review complaint by administrator, Update complaint status, Track complaint progress, Resolve and close complaint case",
    link: "https://github.com/syumairaazhar/aduan-rangkaian.git",
    images: ["/images/helpdesknew.png"]
  },
  {
    id: 6,
    category: "utem",
    title: "Shopping Mall Feedback System",
    tech: "Java",
    overview: "Developed a Java-based feedback management system designed to collect, store, and analyse feedback from shopping mall customers and staff. The system provides a structured platform for recording user opinions, identifying areas for improvement, and generating insights to support better customer service and operational decision-making.",
    tools: "Java, File Handling, GUI",
    highlights: "Customer and staff feedback collection, Graphical user interface (GUI), File-based data storage, Feedback analysis and reporting, Structured feedback management workflow, User-friendly desktop application",
    role: "Designed and developed the complete application, including the graphical user interface, feedback processing logic, file management functionality, and reporting features. Responsible for implementing data storage, retrieval, validation, and analysis functionalities to support effective feedback management.",
    flow: "Submit feedback, Validate user input, Store feedback in files, Retrieve feedback records, Analyse feedback data, Generate reports and summaries",
    link: "",
    images: ["/images/mall_feedback_java.jpg"]
  },
  {
    id: 7,
    category: "puo",
    title: "Portable Secure Media Server (FYP)",
    tech: "Raspberry Pi",
    overview: "Developed a portable and secure media server using Raspberry Pi to enable controlled access to digital content across a local network. The system was designed to provide a cost-effective and portable solution for storing, managing, and distributing media files while ensuring authorised access through network security and user management controls.",
    tools: "Raspberry Pi, Linux, Networking",
    highlights: "Portable media hosting solution, Secure content access management, Local network file sharing, Raspberry Pi server deployment, Linux system administration, Cost-effective media distribution platform",
    role: "Designed and developed the complete solution, including Raspberry Pi setup, Linux server configuration, network connectivity, media storage management, user access control, and system testing. Responsible for ensuring secure content distribution and reliable network accessibility.",
    flow: "Configure Raspberry Pi server, Deploy Linux operating system, Set up media storage and sharing services, Configure network access controls, Connect client devices to the server, Access and distribute media content securely",
    link: "",
    images: ["/images/portable_media.png"]
  }
];

function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, src: "", alt: "" });

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const openLightbox = (src, alt) => {
    setLightboxState({ isOpen: true, src, alt });
  };

  const closeLightbox = () => {
    setLightboxState({ isOpen: false, src: "", alt: "" });
  };

  const getImageUrl = (path) => {
    const filename = path.split("/").pop();
    return new URL(`../assets/images/${filename}`, import.meta.url).href;
  };

  return (
    <div className="page-content">
      <div className="section-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Explore a selection of academic assignments, degree final year projects, and personal work.
        </motion.p>
      </div>

      {/* Categories Filtering */}
      <div className="filter-tabs">
        <button className={`tab-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
        <button className={`tab-btn ${filter === "personal" ? "active" : ""}`} onClick={() => setFilter("personal")}>Personal & Freelance</button>
        <button className={`tab-btn ${filter === "utem" ? "active" : ""}`} onClick={() => setFilter("utem")}>Degree (UTeM)</button>
        <button className={`tab-btn ${filter === "puo" ? "active" : ""}`} onClick={() => setFilter("puo")}>Diploma (PUO)</button>
      </div>

      {/* Grid List */}
      <motion.div 
        layout 
        className="projects-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="project-card"
            >
              <div className="project-card-images">
                <div className="project-img-wrapper">
                  {project.images && project.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={getImageUrl(img)} 
                      alt={`${project.title} screenshot`}
                      onClick={() => openLightbox(getImageUrl(img), project.title)}
                      onError={(e) => {
                        // Fallback image
                        e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop";
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <div className="project-details">
                  <p>
                    {project.tech.split(",").map((t, i) => (
                      <span key={i} className="tech-tag">{t.trim()}</span>
                    ))}
                  </p>
                  <p style={{ marginTop: "12px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {project.overview}
                  </p>
                </div>

                <button className="btn read-more-btn" onClick={() => openModal(project)}>
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Details */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      {/* Lightbox zooms */}
      <Lightbox 
        imgSrc={lightboxState.src} 
        imgAlt={lightboxState.alt} 
        isOpen={lightboxState.isOpen} 
        onClose={closeLightbox} 
      />
    </div>
  );
}

export default ProjectsPage;