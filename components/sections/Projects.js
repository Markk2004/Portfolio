'use client';

import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import ProjectDetails from '../ui/ProjectDetails';

export default function Projects({ projects, content }) {
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);
  const selectedProject = projects.find((project) => project.slug === selectedProjectSlug);
  const closeDetails = () => setSelectedProjectSlug(null);

  return (
    <>
      <div id="projects" className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            content={content}
            onViewDetails={setSelectedProjectSlug}
          />
        ))}
      </div>

      <ProjectDetails
        project={selectedProject}
        content={content}
        onClose={closeDetails}
      />
    </>
  );
}

