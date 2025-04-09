import React from "react";

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
        {/* render a <span> for each technology in the technologies array */}
      </div>
  );
}

export default ProjectItem;
