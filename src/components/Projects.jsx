import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {

    const [projects, setProjects] = useState([
        { id: 1, title: "Portfolio Website", tech: "HTML, CSS, JavaScript" },
        { id: 2, title: "Job Application Tracker", tech: "PHP, SQLite" },
        { id: 3, title: "Flutter Shopping App", tech: "Flutter" },
        { id: 4, title: "ICT Helpdesk FAQ System", tech: "PHP, MySQL" }
    ]);

    const [title, setTitle] = useState("");
    const [tech, setTech] = useState("");

    const [editId, setEditId] = useState(null);

    // ADD or UPDATE
    function handleSubmit() {

        if (!title || !tech) return;

        if (editId) {
            // UPDATE
            const updated = projects.map((project) =>
                project.id === editId
                    ? { ...project, title, tech }
                    : project
            );

            setProjects(updated);
            setEditId(null);

        } else {
            // ADD
            const newProject = {
                id: Date.now(),
                title,
                tech
            };

            setProjects([...projects, newProject]);
        }

        setTitle("");
        setTech("");
    }

    // DELETE
    function deleteProject(id) {
        setProjects(projects.filter((p) => p.id !== id));
    }

    // EDIT
    function editProject(project) {
        setTitle(project.title);
        setTech(project.tech);
        setEditId(project.id);
    }

    return (
        <section className="projects-container">
            {/* <h2>My Projects</h2> */}

            {/* FORM */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Tech Stack"
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                />

                <button onClick={handleSubmit}>
                    {editId ? "Update Project" : "Add Project"}
                </button>
            </div>

            {/* LIST */}
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onDelete={deleteProject}
                        onEdit={editProject}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;