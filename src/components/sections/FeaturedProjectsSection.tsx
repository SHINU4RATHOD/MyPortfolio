
import { projectsData } from '@/config/portfolio';
import ProjectCard from '@/components/ui/ProjectCard';

export default function FeaturedProjectsSection() {
  return (
    

        
          Featured Projects
        
        
          A showcase of key projects demonstrating my skills in AI, Machine Learning, and Data Science to deliver impactful solutions.
        
        
          {projectsData.map((project) => (
            
              {project} 
            
          ))}
        
      
    
  );
}

    