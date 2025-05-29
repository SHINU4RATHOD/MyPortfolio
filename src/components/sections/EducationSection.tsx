
"use client";

import { educationData } from '@/config/portfolio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

export default function EducationSection() {
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
    <section id="education" className="py-16 md:py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-12 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education & <span className="text-primary">Training</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and foundational training in Data Science and Computer Applications.
          </p>
        </div>
        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={edu.id}
                className={cn(
                  "transition-all duration-700 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              >
                <Card className="bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Icon className="h-10 w-10 text-primary mt-1" />
                      <div>
                        <CardTitle className="text-xl">{edu.title}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                        <p className="text-sm text-muted-foreground">{edu.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{edu.description}</p>
                    {edu.skills && (
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-foreground mb-1">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                        </div>
                      </div>
                    )}
                    {edu.cgpa && (
                      <p className="text-sm text-foreground"><strong>CGPA:</strong> {edu.cgpa}</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
