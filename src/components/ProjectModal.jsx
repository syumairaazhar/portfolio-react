import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  // Helper to split and trim comma-separated strings
  const parseList = (str) => {
    if (!str) return [];
    return str.split(",").map(item => item.trim()).filter(Boolean);
  };

  const tools = parseList(project.tools);
  const highlights = parseList(project.highlights);
  const flow = parseList(project.flow);

  return (
    <AnimatePresence>
      <div className="project-modal">
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
        >
          <span className="modal-close" onClick={onClose}>&times;</span>

          <h3>{project.title}</h3>

          {project.overview && (
            <>
              <h4>Overview</h4>
              <p>{project.overview}</p>
            </>
          )}

          {tools.length > 0 && (
            <>
              <h4>Tools & Technologies</h4>
              <ul className="modal-tools-list">
                {tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </>
          )}

          {highlights.length > 0 && (
            <>
              <h4>Key Highlights</h4>
              <ul className="modal-list">
                {highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {project.role && (
            <>
              <h4>My Role</h4>
              <p>{project.role}</p>
            </>
          )}

          {flow.length > 0 && (
            <>
              <h4>System Flow</h4>
              <ol className="modal-list">
                {flow.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </>
          )}

          {project.link && (
            <a href={project.link} className="btn project-link-btn" target="_blank" rel="noopener noreferrer">
              <span>View Project Source / Demo</span>
            </a>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;
