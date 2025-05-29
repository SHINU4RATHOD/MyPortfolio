
"use client";

import { experienceTimeline } from '@/config/portfolio';
import TimelineItem from '@/components/ui/TimelineItem';
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-12 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional roles and key accomplishments in Data Science and AI.
          </p>
        </div>
        
        <div className="relative">
          {/* This div creates the central timeline line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-border/50 rounded-full -translate-x-1/2"></div>
          {experienceTimeline.map((event, index) => (
            <div
              key={event.id}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
            >
              <TimelineItem 
                event={event} 
                isLast={index === experienceTimeline.length - 1}
                alignLeft={index % 2 !== 0} // Alternate alignment for desktop
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
