
"use client";

import { skillsData, SkillCategory, Skill } from '@/config/portfolio';
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
            className="px-4 py-2 text-sm sm:text-base transform transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground cursor-default"
          >
            <skill.icon className="mr-2 h-5 w-5" />
            {skill.name}
          </Badge>
        TooltipTrigger>
        
          <p>{skill.name}</p>
        
      
    
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
    <section id="skills" className="py-16 md:py-24 bg-background" ref={sectionRef}>
      

        
          Technical Skills
        
        
          {skillsData.map((categoryObj, index) => (
            
              
                
                  {categoryObj.category}
                
                
                  
                    {categoryObj.skills.map((skill) => (
                      
                        {skill}
                      
                    ))}
                  
                
              
            
          ))}
        
      
       
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
      
    
  );
}

    