
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { professionalName, professionalSummaryHero, socialLinks } from '@/config/portfolio';
import Image from 'next/image';

export default function HeroSection() {
  const resumeUrl = "https://drive.google.com/file/d/17Tb5gf3lv_Kg5nBnpMMvpNfUxwC6MOxo/view?usp=drive_link";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-background to-slate-900 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {/* Subtle background pattern or animated particles could go here for a futuristic tech aesthetic */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-primary">
            <Image
              src="/images/shinu-rathod-profile.png"
              alt={`${professionalName} headshot`}
              fill
              objectFit="cover"
              priority // For LCP
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-primary">
            Hi I'm <span className="text-primary">{professionalName}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-medium mb-8">
            Data Scientist & AI Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {professionalSummaryHero}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 transition-shadow border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </a>
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                <link.icon className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-primary" />
        </Link>
      </div>
    </section>
  );
}
