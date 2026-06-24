import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function Lightbox({ imgSrc, imgAlt, isOpen, onClose }) {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imgSrc) return null;

  return (
    <AnimatePresence>
      <div className="lightbox">
        <motion.div 
          className="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        <span className="lightbox-close" onClick={onClose}>&times;</span>
        
        <motion.img 
          src={imgSrc} 
          alt={imgAlt || "Lightbox preview"} 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </AnimatePresence>
  );
}

export default Lightbox;
