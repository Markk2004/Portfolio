import ProjectCard from '../ui/ProjectCard';

export default function Projects({ projects, content }) {
  return (
    <div id="projects" className="grid gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} content={content} />
      ))}
    </div>
  );
}
