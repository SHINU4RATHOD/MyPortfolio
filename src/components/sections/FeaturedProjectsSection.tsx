import { projects } from '@/config/portfolio';
import ProjectCard from '@/components/ui/ProjectCard';

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of projects that demonstrate my passion for AI, machine learning, and data-driven solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
