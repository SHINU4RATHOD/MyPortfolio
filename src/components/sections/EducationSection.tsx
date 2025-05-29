
import { educationData } from '@/config/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EducationSection() {
  return (
    

        
          Education & Training
        
        
          My academic background and foundational training in Data Science and Computer Applications.
        
        
          {educationData.map((edu) => {
            const Icon = edu.icon;
            return (
              

                
                  
                    
                    {edu.title}
                  
                  {edu.institution}
                  {edu.date}
                
                
                  {edu.description}
                  {edu.skills && (
                    
                      
                        Skills:
                      
                      
                        {edu.skills.map(skill => {skill})}
                      
                    
                  )}
                  {edu.cgpa && (
                    CGPA: {edu.cgpa}
                  )}
                
              
            );
          })}
        
      
    
  );
}

    