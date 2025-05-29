
import { experienceTimeline } from '@/config/portfolio';
import TimelineItem from '@/components/ui/TimelineItem';

// Renamed from TimelineSection to ExperienceSection
export default function ExperienceSection() {
  return (
    

        
          Work Experience
        
        
          A journey through my professional roles and key accomplishments in Data Science and AI.
        
        
          {/* This div creates the central timeline line for desktop */}
          
          {experienceTimeline.map((event, index) => (
            
              {event} 
              isLast={index === experienceTimeline.length - 1}
              alignLeft={index % 2 !== 0} // Alternate alignment for desktop
            
          ))}
        
      
    
  );
}

    