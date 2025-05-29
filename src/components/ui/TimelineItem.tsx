import { TimelineEvent } from '@/config/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
  alignLeft?: boolean;
}

export default function TimelineItem({ event, isLast, alignLeft = false }: TimelineItemProps) {
  const Icon = event.icon;
  return (
    <div className={cn("relative flex items-start group", alignLeft ? "md:flex-row-reverse" : "md:flex-row")}>
      {/* Timeline Connector & Dot */}
      <div className={cn(
          "flex flex-col items-center mr-6 md:mr-0",
          alignLeft ? "md:ml-6 md:order-last" : "md:mr-6"
        )}>
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10 shadow-md group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        {!isLast && (
          <div className="w-1 bg-border flex-grow group-hover:bg-accent/50 transition-colors duration-300" style={{minHeight: '100px'}}></div>
        )}
      </div>

      {/* Card Content */}
      <div className={cn(
        "w-full md:w-[calc(50%-3rem)] mb-8",
        alignLeft ? "md:text-right md:mr-auto" : "md:ml-auto"
        )}>
        <Card className="shadow-lg transform transition-all duration-300 group-hover:shadow-primary/20 group-hover:scale-[1.02]">
          <CardHeader>
            <p className={cn("text-sm text-muted-foreground mb-1", alignLeft && "md:text-right")}>{event.date}</p>
            <CardTitle className={cn("text-xl", alignLeft && "md:text-right")}>{event.title}</CardTitle>
            <p className={cn("text-md text-primary font-semibold", alignLeft && "md:text-right")}>{event.institution}</p>
          </CardHeader>
          <CardContent>
            <CardDescription className={cn(alignLeft && "md:text-right")}>{event.description}</CardDescription>
          </CardContent>
        </Card>
      </div>
       {/* Spacer for the other side on desktop */}
       <div className="hidden md:block w-[calc(50%-3rem)]"></div>
    </div>
  );
}
