
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/config/portfolio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react'; // Added ExternalLink for live links

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const ProjectIcon = project.icon;

  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        {project.imageUrl && (
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={project.imageHint || "project technology"}
            />
          </div>
        )}
        <div className="flex items-center space-x-3">
          {ProjectIcon && <ProjectIcon className="h-8 w-8 text-primary" />}
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {project.impact && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Key Impact:</h4>
            <p className="text-sm text-muted-foreground">{project.impact}</p>
          </div>
        )}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 flex flex-col sm:flex-row sm:justify-start gap-2">
        {project.githubLink && (
          <Button asChild variant="outline" className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View on GitHub
            </Link>
          </Button>
        )}
        {project.liveLink && (
          <Button asChild variant="default" className="w-full sm:w-auto">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> View Live
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
