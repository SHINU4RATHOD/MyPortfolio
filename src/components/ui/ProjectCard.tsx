
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/config/portfolio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react'; // Assuming only GitHub link as per "View Project"

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    

        
          
            
              
            
          
          
            {project.icon && }
            {project.title}
          
          {project.description}
        
        
          {project.impact && (
            
              
                Key Impact:
              
              {project.impact}
            
          )}
          
            
              Technologies:
            
            
              {project.technologies.map((tech) => (
                
                  {tech}
                
              ))}
            
          
        
        
          {project.githubLink && (
            
              
                
                  
                   View Project on GitHub
                
              
            
          )}
        
      
    
  );
}

    