
import type { TimelineEvent } from '@/config/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
  alignLeft?: boolean; // For desktop timeline alignment
}

export default function TimelineItem({ event, isLast, alignLeft = false }: TimelineItemProps) {
  const Icon = event.icon;

  return (
    <div className={cn("relative flex md:items-stretch mb-8 md:mb-0", { "md:flex-row-reverse": alignLeft && !isLast, "md:flex-row": !alignLeft && !isLast, "md:w-full": isLast })}>
      {/* Desktop: Connector and Dot */}
      <div className="hidden md:flex flex-col items-center w-1/2">
        {/* Spacer for items not on this side */}
        {((alignLeft && !isLast) || (!alignLeft && !isLast)) && <div className="flex-1"></div>}
      </div>

      <div className={cn(
        "relative flex-shrink-0 md:w-1/2",
        { "md:pl-8": !alignLeft, "md:pr-8": alignLeft }
      )}>
        {/* Mobile: Timeline line and dot */}
        <div className="md:hidden absolute left-0 top-0 bottom-0 flex flex-col items-center w-8">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <Icon className="h-5 w-5" suppressHydrationWarning />
          </div>
          {!isLast && <div className="flex-grow w-1 bg-border/50"></div>}
        </div>
        
        {/* Desktop: Dot */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[-16px] z-10">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground ring-4 ring-background">
            <Icon className="h-5 w-5" suppressHydrationWarning />
          </div>
        </div>

        <Card className={cn(
          "ml-12 md:ml-0 bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300",
          { "md:text-left": !alignLeft, "md:text-right md:items-end": alignLeft }
        )}>
          <CardHeader className={cn({ "md:items-start": !alignLeft, "md:items-end": alignLeft })}>
            <p className="text-sm text-muted-foreground">{event.date}</p>
            <CardTitle className="text-xl">{event.title}</CardTitle>
            <CardDescription>{event.institution}</CardDescription>
          </CardHeader>
          <CardContent className={cn({ "md:text-left": !alignLeft, "md:text-right": alignLeft })}>
            <p className="text-muted-foreground mb-3">{event.description}</p>
            {event.skills && event.skills.length > 0 && (
              <div className={cn("mb-2", {"md:justify-end flex flex-wrap gap-2": alignLeft})}>
                <h4 className="text-sm font-semibold text-foreground mb-1 sr-only">Key Skills:</h4>
                <div className={cn("flex flex-wrap gap-2", {"md:justify-end": alignLeft})}>
                  {event.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
              </div>
            )}
            {event.cgpa && (
              <p className="text-sm text-foreground"><strong>CGPA:</strong> {event.cgpa}</p>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Desktop: Spacer for items on the other side or line for last item */}
      <div className={cn("hidden md:flex flex-col items-center w-1/2", {"border-r-transparent": isLast && alignLeft, "border-l-transparent": isLast && !alignLeft })}>
        {(!isLast) && <div className="flex-1"></div>}
      </div>
    </div>
  );
}
