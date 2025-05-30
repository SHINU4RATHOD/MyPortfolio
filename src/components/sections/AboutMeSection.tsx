
"use client";

import { professionalName } from "@/config/portfolio";
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

export default function AboutMeSection() {
  const bio = "Passionate Data Scientist with hands-on experience in building and deploying AI-driven solutions, specializing in Machine Learning, Deep Learning, NLP, and Generative AI. Proficient in crafting scalable, production-grade models to solve complex, real-world problems. Developed impactful solutions like autism detection (91.8% accuracy) and intelligent Medical Chatbot, building a Source Code Analyzer, and creating a Multi-Document Reader using state-of-the-art AI technologies. Dedicated to continuous learning, innovation, and delivering impactful, data-driven insights.";
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSectionRef = sectionRef.current; 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentSectionRef) { // Check again before unobserving
            observer.unobserve(currentSectionRef);
          }
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.3, 
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) { 
        observer.unobserve(currentSectionRef);
      }
    };
  }, []); // No need to depend on sectionRef.current here

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "max-w-3xl mx-auto text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {bio}
          </p>
          <div className="mt-8 text-sm text-foreground/80">
            <p>Keywords: Data Scientist, AI Engineer, Machine Learning, Deep Learning, NLP, Generative AI, Python, TensorFlow, LangChain, LLMs, Flask, Docker, Pinecone, ChromaDB, Power BI, SQL, R, Predictive Maintenance, Autism Detection, Medical Chatbot, Code Analysis, Multi-Document Reader.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
