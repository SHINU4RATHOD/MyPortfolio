"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';
import { socialLinks } from '@/config/portfolio';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      // Optionally reset form fields here if not using a library that handles it
      // (e.g., by getting form ref and calling reset())
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind, a question, or just want to connect? Feel free to reach out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Send me a message directly through this form.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input type="text" id="name" name="name" placeholder="Your Name" required className="mt-1 bg-slate-700/50 border-slate-600"/>
                  {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(", ")}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="email" id="email" name="email" placeholder="your.email@example.com" required className="mt-1 bg-slate-700/50 border-slate-600"/>
                  {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(", ")}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="mt-1 bg-slate-700/50 border-slate-600"/>
                  {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(", ")}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
                <CardDescription>Other ways to connect with me.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link) => (
                  <div key={link.name} className="flex items-center space-x-3">
                    <link.icon className="h-6 w-6 text-primary" />
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
            {/* You could add a map or other info here */}
          </div>
        </div>
      </div>
    </section>
  );
}
