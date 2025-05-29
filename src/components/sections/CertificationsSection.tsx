
"use client";

import { certificationsData } from '@/config/portfolio';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

export default function CertificationsSection() {
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
    <section id="certifications" className="py-16 md:py-24 bg-slate-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-12 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Licenses & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Validating my expertise and commitment to continuous learning in the field of Data Science and AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => {
            const CertIcon = cert.icon;
            return (
              <div
                key={cert.id}
                className={cn(
                  "transition-all duration-700 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              >
                <Card className="flex flex-col h-full bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="items-center text-center">
                    <CertIcon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <p className="text-sm text-muted-foreground">Issued: {cert.date}</p>
                  </CardContent>
                  <CardFooter className="justify-center pt-4">
                    <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Link href={cert.verificationLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Verify Certification
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
