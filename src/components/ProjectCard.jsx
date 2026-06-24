function ProjectCard({ project, onDelete, onEdit }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.tech}</p>

      <button onClick={() => onEdit(project)}>
        Edit
      </button>

      <button onClick={() => onDelete(project.id)}>
        Delete
      </button>
    </div>
  );
}

export default ProjectCard;