import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "../components/Lightbox";

const certsData = [
  {
    id: 1,
    title: "HCIA Huawei Completion",
    issuer: "Huawei",
    img: "/certs/hcia.png",
    link: ""
  },
  {
    id: 2,
    title: "Coursera Designing for User Experience",
    issuer: "Coursera",
    img: "/certs/design_user_experience.png",
    link: "https://coursera.org/verify/OAKEC0TD9JBG"
  },
  {
    id: 3,
    title: "Coursera Crash Course on Python",
    issuer: "Coursera",
    img: "/certs/python.png",
    link: "https://coursera.org/verify/I8Q1GFML8WNI"
  },
  {
    id: 4,
    title: "Coursera User Interface Design and Prototyping",
    issuer: "Coursera",
    img: "/certs/ui_design_prototyping.png",
    link: "https://coursera.org/verify/X4PUAK7J399S"
  },
  {
    id: 5,
    title: "Coursera Fundamentals of UIUX Design",
    issuer: "Coursera",
    img: "/certs/uiux_design.png",
    link: "https://coursera.org/verify/ND16WI6XR5T0"
  }
];

function Certifications() {
  const [lightboxState, setLightboxState] = useState({ isOpen: false, src: "", alt: "" });

  const openLightbox = (src, alt) => {
    setLightboxState({ isOpen: true, src, alt });
  };

  const closeLightbox = () => {
    setLightboxState({ isOpen: false, src: "", alt: "" });
  };

  const getImageUrl = (path) => {
    const filename = path.split("/").pop();
    return new URL(`../assets/certs/${filename}`, import.meta.url).href;
  };

  return (
    <div className="page-content">
      <div className="section-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Certifications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Professional achievements, completions, and specialized industry credentials.
        </motion.p>
      </div>

      <div className="projects-grid">
        {certsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="project-card"
          >
            <div className="project-card-images" style={{ height: "220px" }}>
              <img
                src={getImageUrl(cert.img)}
                alt={cert.title}
                draggable="false"
                onClick={() => openLightbox(getImageUrl(cert.img), cert.title)}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=600&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="project-card-body">
              <h3 style={{ fontSize: "18px" }}>{cert.title}</h3>
              <div className="project-details">
                <p>Issued by: <strong>{cert.issuer}</strong></p>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ width: "100%", justifyContent: "center", fontSize: "14px" }}
                >
                  <i className="fa-solid fa-square-envelope"></i> Verify Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        imgSrc={lightboxState.src}
        imgAlt={lightboxState.alt}
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
      />
    </div>
  );
}

export default Certifications;
