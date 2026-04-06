
"use client";

import { professionalName } from "@/config/portfolio";
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

export default function AboutMeSection() {
  const bio = "AI Researcher at IIT Ropar and Data Scientist building production-grade AI systems. My current research focuses on on-device phishing URL detection using Transformer fine-tuning (MiniLM + LoRA) on 35M+ URLs, deployed as an Android app via ONNX INT8 quantization. Beyond cybersecurity AI, I build Generative AI applications — RAG pipelines, LLM-powered chatbots, and multi-document readers using LangChain, Pinecone, and ChromaDB. Actively upskilling in Agentic AI, exploring ReAct agents, tool-use, and multi-agent orchestration frameworks. Dedicated to continuous learning and delivering impactful, real-world AI solutions.";
  
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
            <p>Keywords: AI Researcher, IIT Ropar, Data Scientist, Machine Learning, Deep Learning, Transformers, LoRA, ONNX, On-Device ML, NLP, Generative AI, LLMs, Prompt Engineering, RAG, LangChain, LlamaIndex, Agentic AI, AI Agents, ReAct, Pinecone, ChromaDB, Cybersecurity AI, Phishing Detection, Android ML, Python, PyTorch, TensorFlow, Power BI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
