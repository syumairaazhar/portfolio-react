import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import Resume from "./pages/Resume";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import "./styles.css";
function App() {
  useEffect(() => {
    // Disable right-click on all images
    const handleContextMenu = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };
    // Disable dragging on all images
    const handleDragStart = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Support both singular /project and plural /projects */} 
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/projects" element={<Navigate to="/project" replace />} />
        
        <Route path="/resume" element={<Resume />} />
        <Route path="/certification" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer>
        <p>© 2025 Syumaira Azhar · Built with passion & clean code</p>
      </footer>
    </BrowserRouter>
  );
}
export default App;
