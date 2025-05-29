import { timelineEvents } from '@/config/portfolio';
import TimelineItem from '@/components/ui/TimelineItem';

export default function TimelineSection() {
  return (
    <section id="experience" className="bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">My Journey</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Follow my professional and educational path, highlighting key roles and achievements.
        </p>
        <div className="relative">
          {/* This div creates the central timeline line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-border -translate-x-1/2"></div>
          {timelineEvents.map((event, index) => (
            <TimelineItem 
              key={event.id} 
              event={event} 
              isLast={index === timelineEvents.length - 1}
              alignLeft={index % 2 !== 0} // Alternate alignment for desktop
            />
          ))}
        </div>
      </div>
    </section>
  );
}
