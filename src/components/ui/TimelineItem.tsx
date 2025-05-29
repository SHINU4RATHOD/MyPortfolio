
import { TimelineEvent } from '@/config/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from './badge';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
  alignLeft?: boolean;
}

export default function TimelineItem({ event, isLast, alignLeft = false }: TimelineItemProps) {
  const Icon = event.icon;
  return (
    

        {/* Timeline Connector & Dot */}
        
          
            
          
          {!isLast && (
            
          )}
        

        {/* Card Content */}
        
          
            {event.date}
            {event.title}
            {event.institution}
          
          
            {event.description}
            {event.skills && (
              
                {event.skills.map(skill => {skill})}
              
            )}
            {event.cgpa && (
              CGPA: {event.cgpa}
            )}
          
        
       {/* Spacer for the other side on desktop, only if not the last item or if timeline continues */}
       {!isLast && }
    
  );
}

    