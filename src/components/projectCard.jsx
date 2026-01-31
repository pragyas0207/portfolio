import { useState } from "react";
import "../styles/projectCard.css";

export default function ProjectCard({ title, description, tech, link }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-card">
      <div className="project-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span className={`toggle ${open ? "open" : ""}`}>+</span>
      </div>

      {open && (
        <div className="project-content">
          <p className="desc">{description}</p>

          <p className="tech">
            <strong>Tech:</strong> {tech}
          </p>

          <a href={link} target="_blank" rel="noreferrer" className="view-link">View Project</a>
        </div>
      )}
    </div>
  );
}
