
"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';
import { socialLinks, professionalName } from '@/config/portfolio';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, Mail, Linkedin, Github } from "lucide-react"; // Added Mail, Linkedin, Github
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  }, [state, toast]);

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

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-12 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to connect? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className={cn(
            "contact-form-card w-full transition-all duration-1000 ease-out delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Form</CardTitle>
              <CardDescription>Send me a message directly through this form.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
                  {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>

          <div className={cn(
            "space-y-8 transition-all duration-1000 ease-out delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Details</CardTitle>
                <CardDescription>Other ways to connect with me.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                      <IconComponent className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.name === 'Email' ? 'shinukrathod0143@gmail.com' : link.name}
                      </span>
                    </Link>
                  );
                })}
              </CardContent>
            </Card>
             <div className="text-center md:text-left">
                <p className="text-muted-foreground">I'm looking forward to hearing from you!</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
