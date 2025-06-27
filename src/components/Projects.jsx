import React, { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/sdooodly/repos')
      .then(response => response.json())
      .then(data => {
        const pinnedRepos = data.filter(repo => repo.stargazers_count > 0); // Simple filter for pinned repos
        setProjects(pinnedRepos);
      });
  }, []);

  return (
    <div className="projects-container">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
