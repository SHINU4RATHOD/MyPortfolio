
"use client";

import { skillsData, type SkillCategory, type Skill } from '@/config/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

const SkillBadge = ({ skill }: { skill: Skill }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm sm:text-base transform transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground cursor-default shadow-md hover:shadow-lg"
          >
            <skill.icon className="mr-2 h-5 w-5" />
            {skill.name}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>{skill.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function SkillsSection() {
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
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current; // Capture ref value
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    return () => {
      if (currentSectionRef) { // Use captured value in cleanup
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-12 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and expertise.
          </p>
        </div>
        <div className="space-y-12">
          {skillsData.map((categoryObj: SkillCategory, categoryIndex: number) => (
            <div
              key={categoryObj.category}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0 animate-fade-in" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: isVisible ? `${categoryIndex * 200}ms` : '0ms', animationDelay: isVisible ? `${categoryIndex * 200}ms` : '0ms' }}
            >
              <Card className="bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardHeader className="bg-card/50">
                  <CardTitle className="text-2xl text-center text-primary">{categoryObj.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-3 sm:gap-4 p-6">
                  {categoryObj.skills.map((skill: Skill, skillIndex: number) => (
                     <div
                        key={skill.name}
                        className={cn(
                          "transition-all duration-500 ease-out",
                          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                        )}
                        style={{ transitionDelay: isVisible ? `${categoryIndex * 200 + skillIndex * 50}ms` : '0ms' }}
                      >
                        <SkillBadge skill={skill} />
                      </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
